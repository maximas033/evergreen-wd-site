
const html=document.documentElement;
const saved=localStorage.getItem('theme');
if(saved) html.setAttribute('data-theme', saved);
const t=document.getElementById('themeToggle');
if(t){
  const setLabel=()=>{t.textContent=(html.getAttribute('data-theme')==='dark')?'☀️ Light':'🌙 Dark';};
  t.addEventListener('click',()=>{
    const next=html.getAttribute('data-theme')==='dark'?'light':'dark';
    html.setAttribute('data-theme',next);
    localStorage.setItem('theme',next);
    setLabel();
  });
  setLabel();
}
const m=document.getElementById('menuBtn');
const n=document.getElementById('navLinks');
if(m&&n){
  m.addEventListener('click',()=>n.classList.toggle('open'));
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));
}
