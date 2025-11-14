document.addEventListener('DOMContentLoaded', function(){
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el, i)=>{
    el.style.transitionDelay = (i * 45) + 'ms';
  });

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.05, rootMargin:'0px 0px -2% 0px'});

  reveals.forEach(el=>io.observe(el));

  // Add parallax effect on mouse move
  const cards = document.querySelectorAll('.card');
  document.addEventListener('mousemove', (e)=>{
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    cards.forEach(card=>{
      card.style.setProperty('--mouse-x', x);
      card.style.setProperty('--mouse-y', y);
    });
  });
});
