import Stripe from "stripe";
import { Resend } from "resend";
import getRawBody from "raw-body";

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: set your two Payment Link IDs here (see Stripe → Payment Links → ID column)
const DEPOSIT_LINK_ID = plink_1SKkfxCiITzGGDVEpUt7PuK2;   // AED 1,800
const PROGRAM_LINK_ID = plink_1SKkheCiITzGGDVEEWy1BsSg;   // AED 49,000

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const raw = await getRawBody(req);
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      raw,
      req.headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const s = event.data.object;
    const email = s.customer_details?.email;
    const name = s.customer_details?.name?.split(" ")[0] || "there";

    // Route by payment link
    if (s.payment_link === DEPOSIT_LINK_ID) {
      await resend.emails.send({
        from: "Bespoke Training Dubai <hello@bespoketrainingdubai.ae>",
        to: email,
        subject: "Deposit received — consultation secured",
        html: (await import("../email-deposit.html?raw")).default
              .replaceAll("{{first_name}}", name)
      });
    }

    if (s.payment_link === PROGRAM_LINK_ID) {
      await resend.emails.send({
        from: "Bespoke Training Dubai <hello@bespoketrainingdubai.ae>",
        to: email,
        subject: "Payment confirmed — onboarding",
        html: (await import("../email-onboarding.html?raw")).default
              .replaceAll("{{first_name}}", name)
      });
    }
  }

  res.json({ received: true });
}
