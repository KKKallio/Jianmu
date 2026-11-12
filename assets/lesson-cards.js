/* Shared one-question-at-a-time exercise template for every lesson section. */
(function(){
function init(){
 for(const id of ['grammar','listening','reading','knm','review']){
  const area=document.getElementById(id);if(!area)continue;
  const items=Array.from(area.children).filter(el=>el.querySelector('input[type="radio"],input[type="text"]'));
  if(!items.length)continue;
  let current=0;
  const controls=document.createElement('div');controls.className='quiz-controls';
  const back=document.createElement('button');back.type='button';back.textContent='←';back.setAttribute('aria-label','上一题 · Previous question');
  const counter=document.createElement('span');counter.className='quiz-counter';counter.setAttribute('aria-live','polite');
  const next=document.createElement('button');next.type='button';next.textContent='→';next.setAttribute('aria-label','下一题 · Next question');
  controls.append(back,counter,next);area.after(controls);
  function show(n){current=Math.max(0,Math.min(items.length-1,n));items.forEach((el,i)=>{el.hidden=i!==current;el.classList.add('quiz-card')});counter.textContent=(current+1)+'/'+items.length;back.disabled=current===0;next.disabled=current===items.length-1}
  back.addEventListener('click',()=>show(current-1));next.addEventListener('click',()=>show(current+1));
  area.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('input.fill-answer')){e.preventDefault();if(current<items.length-1)show(current+1)}});
  show(0);
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();