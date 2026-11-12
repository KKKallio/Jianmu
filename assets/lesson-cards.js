/* Shared one-question-at-a-time exercise template for every lesson section. */
(function(){
function init(){
 const normalize=v=>String(v??'').trim().toLocaleLowerCase('nl-NL').replace(/[.!?]+$/,'').replace(/\s+/g,' ');
 const original=typeof window.grade==='function'?window.grade:(typeof window.check==='function'?window.check:null);
 const action=typeof window.grade==='function'?'grade':'check';
 if(original&&typeof quizzes!=='undefined'){
  window[action]=function(section){
   original(section);
   const questions=quizzes[section]||[];
   const area=document.getElementById(section);
   if(!area)return;
   questions.forEach((q,index)=>{
    const cell=area.children[index];if(!cell)return;
    let feedback=cell.querySelector('.answer-feedback');
    if(!feedback){feedback=document.createElement('div');feedback.className='answer-feedback';feedback.setAttribute('role','status');cell.append(feedback)}
    const options=q[1]||[];
    const input=options.length?cell.querySelector('input[type="radio"]:checked'):cell.querySelector('input.fill-answer');
    const raw=input?input.value:'';
    const expected=options.length?options[q[2]]:(Array.isArray(q[2])?q[2][0]:'');
    const correct=options.length?!!input&&Number(raw)===q[2]:!!normalize(raw)&&q[2].some(v=>normalize(v)===normalize(raw));
    feedback.classList.toggle('correct',correct);
    feedback.classList.toggle('incorrect',!correct);
    feedback.textContent=!normalize(raw)?'未作答 · Not answered · 参考答案 · Answer: '+expected:correct?'✓ 正确 · Correct':'✗ 需复习 · Review · 参考答案 · Answer: '+expected;
   });
   const summary=document.getElementById(section+'Result');
   if(summary){summary.hidden=true;summary.setAttribute('aria-hidden','true')}
  };
 }

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
/* Browser-generated Dutch pronunciation for vocabulary cards. */
function pronounceDutchCard(entry){
 if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){
  window.alert('此浏览器不支持语音朗读 · Speech synthesis is unavailable in this browser.');
  return;
 }
 const text=String(entry||'').split(';')[0].trim();
 if(!text)return;
 window.speechSynthesis.cancel();
 const utterance=new SpeechSynthesisUtterance(text);
 utterance.lang='nl-NL';
 utterance.rate=0.85;
 const voices=window.speechSynthesis.getVoices();
 const voice=voices.find(v=>v.lang.toLowerCase()==='nl-nl')||voices.find(v=>v.lang.toLowerCase().startsWith('nl'));
 if(voice)utterance.voice=voice;
 window.speechSynthesis.speak(utterance);
}
