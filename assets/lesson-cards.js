/* One-question-at-a-time grammar exercise; existing grading and stored progress remain intact. */
(function(){
function init(){
 const area=document.getElementById('grammar');if(!area)return;
 const items=Array.from(area.children).filter(el=>el.querySelector('input[type="radio"]'));
 if(!items.length)return;
 let current=0;
 const controls=document.createElement('div');controls.className='quiz-controls';
 const back=document.createElement('button');back.type='button';back.textContent='←';back.setAttribute('aria-label','上一题 · Previous question');
 const counter=document.createElement('span');counter.className='quiz-counter';counter.setAttribute('aria-live','polite');
 const next=document.createElement('button');next.type='button';next.textContent='→';next.setAttribute('aria-label','下一题 · Next question');
 controls.append(back,counter,next);area.after(controls);
 function show(n){current=Math.max(0,Math.min(items.length-1,n));items.forEach((el,i)=>{el.hidden=i!==current;el.classList.add('quiz-card')});counter.textContent='第 '+(current+1)+' / '+items.length+' 题 · Question '+(current+1)+' / '+items.length;back.disabled=current===0;next.disabled=current===items.length-1}
 back.addEventListener('click',()=>show(current-1));next.addEventListener('click',()=>show(current+1));
 show(0);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();