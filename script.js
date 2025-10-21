
document.querySelectorAll('details.faq').forEach(d=>{
  d.addEventListener('toggle',()=>{ if(d.open){ document.querySelectorAll('details.faq').forEach(o=>{ if(o!==d) o.removeAttribute('open') }) } });
});
