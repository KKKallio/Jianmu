/* Shared one-question-at-a-time exercise template for every lesson section. */
(function(){
function init(){
 const normalize=v=>String(v??'').trim().toLocaleLowerCase('nl-NL').replace(/[.!?]+$/,'').replace(/\s+/g,' ');
 const lessonId=location.pathname.includes('day-002')?'day-002':'day-001';
 const explanations={"day-001":{"grammar":["情态动词 kan 与 ik 搭配；后面的 drinken 用原形。 · With ik, use kan; the main verb stays in the infinitive.","时间状语 Vandaag 放在句首时，限定动词 werk 必须紧跟其后。 · After fronted Vandaag, the finite verb werk comes next.","afspreken 是可分动词：we spreken ... af。 · The separable verb afspreken splits in a main clause.","wil 后接动词原形 afspreken。 · After wil, use the infinitive afspreken."],"listening":["对话明确提到 Amsterdam。 · The dialogue explicitly mentions Amsterdam.","half tien 是九点半（09:30），不是十点半。 · Half tien means 09:30.","Lisa 说她已经有预约：ik heb een afspraak。 · Lisa already has an appointment.","他们约在车站旁的咖啡馆。 · They agree to meet at the café beside the station."],"reading":["邮件邀请的日期是 donderdag（星期四）。 · The invitation specifies Thursday.","half tien 表示 09:30。 · Half tien is 09:30.","邮件要求 Emma 回复能否赴约。 · Emma is asked to confirm whether she can attend."],"knm":["不能赴约时应尽早通知家庭医生诊所，以便取消或改期。 · Contact the GP practice promptly to cancel or reschedule."],"review":["woon 是 ik 的现在时形式；国家名称为 Nederland。 · Use ik woon and the country name Nederland.","spreekt 与 zij/ze 搭配；语言名称是 Nederlands。 · Use zij/ze spreekt Nederlands.","情态动词 kan 放在第二位置，werken 留在句末。 · Put kan in second position and werken at the end.","gaan 的完成时使用 zijn：ik ben gegaan。 · The perfect tense of gaan takes zijn."]},"day-002":{"grammar":["geen 否定不定名词 melk；niet 通常否定形容词等。 · Use geen to negate an indefinite noun.","ei 的复数是 eieren，冠词变为 de。 · The plural of ei is eieren.","goedkoop 是形容词，因此用 niet 否定。 · Negate the adjective goedkoop with niet.","banaan 的复数是 bananen。 · The plural of banaan is bananen."],"listening":["对话说牛奶在奶酪旁边：naast de kaas。 · The milk is next to the cheese.","牛奶价格是 €1,50。 · The dialogue gives the price as €1.50.","Emma 买两盒牛奶：twee pakken。 · Emma buys two cartons."],"reading":["购物清单提到缺少 melk en brood。 · The shopping message says milk and bread are needed.","Lisa 说的时间是 17:30。 · Lisa gives 17:30 as the time."],"knm":["带有 statiegeld 标志的容器应送到回收点退押金。 · Return eligible containers to a collection point for the deposit."],"review":["ik 搭配情态动词 kan，不是 kun。 · The correct first-person form is kan.","gaan 的完成时助动词是 zijn：ben gegaan。 · Gaan takes zijn in the perfect tense.","drinken 的完成时通常用 hebben：heb gedronken。 · Drinken normally takes hebben.","荷兰语 half tien 是九点半。 · Dutch half tien means 09:30.","ik 后面用 kan。 · Use kan after ik."]}};
 const original=typeof window.grade==='function'?window.grade:(typeof window.check==='function'?window.check:null);
 const action=typeof window.grade==='function'?'grade':'check';
 if(original&&typeof quizzes!=='undefined'){
  window[action]=function(section){
   const questions=quizzes[section]||[];
   const allAnswered=questions.every((q,index)=>{const input=q[1].length?document.querySelector('input[name="'+section+index+'"]:checked'):document.querySelector('input[name="'+section+index+'"]');return !!input&&String(input.value).trim()!==''});
   if(!allAnswered){
    const firstMissing=questions.findIndex((q,index)=>{const input=q[1].length?document.querySelector('input[name="'+section+index+'"]:checked'):document.querySelector('input[name="'+section+index+'"]');return !input||!String(input.value).trim()});
    const area=document.getElementById(section);
    let warning=area.parentElement.querySelector('.quiz-incomplete');
    if(!warning){warning=document.createElement('p');warning.className='quiz-incomplete';warning.setAttribute('role','alert');area.after(warning)}
    warning.textContent='请先完成全部 '+questions.length+' 道题，再提交检查。 · Answer all '+questions.length+' questions before checking.';
    area.dispatchEvent(new CustomEvent('quiz-jump',{detail:{index:firstMissing}}));
    return;
   }
   const warning=document.getElementById(section)?.parentElement.querySelector('.quiz-incomplete');if(warning)warning.remove();
   original(section);
   // A section is completed only after every question has an answer.
   if(!allAnswered&&typeof state!=='undefined'&&state.done){state.done[section]=false;if(typeof progress==='function')progress()}
   let correctCount=0;
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
    if(correct)correctCount++;
    cell.dataset.answerStatus=!normalize(raw)?'unanswered':correct?'correct':'incorrect';
    feedback.classList.toggle('correct',correct);
    feedback.classList.toggle('incorrect',!correct);
    feedback.textContent=correct?'✓ 正确 · Correct':'✗ 错误 · Incorrect · 正确答案 · Correct answer: '+expected+'。 '+(explanations[lessonId]?.[section]?.[index]||'请对照课文或语法说明。 · Review the lesson explanation.');
   });
   const summary=document.getElementById(section+'Result');
   if(summary){summary.hidden=false;summary.removeAttribute('aria-hidden');summary.classList.add('quiz-score-summary');summary.textContent='✓ 正确 · Correct: '+correctCount+' / '+questions.length+'   ·   ✗ 错误 · Incorrect: '+(questions.length-correctCount-questions.filter((q,i)=>area.children[i]?.dataset.answerStatus==='unanswered').length)+(allAnswered?'':'   ·   请完成所有题目 · Answer every question')}
   area.dispatchEvent(new CustomEvent('quiz-graded'));

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
  const numberNav=document.createElement('nav');numberNav.className='quiz-number-nav';numberNav.setAttribute('aria-label','题目导航 · Question navigation');
  const numberButtons=items.map((item,i)=>{const button=document.createElement('button');button.type='button';button.textContent=String(i+1);button.setAttribute('aria-label','第 '+(i+1)+' 题 · Question '+(i+1));button.addEventListener('click',()=>show(i));numberNav.append(button);return button});
  area.before(numberNav);
  function show(n){current=Math.max(0,Math.min(items.length-1,n));items.forEach((el,i)=>{el.hidden=i!==current;el.classList.add('quiz-card')});counter.textContent=(current+1)+'/'+items.length;counter.className='quiz-counter'+(items[current].dataset.answerStatus?' quiz-counter-'+items[current].dataset.answerStatus:'');back.disabled=current===0;next.disabled=current===items.length-1;numberButtons.forEach((button,i)=>{button.className='quiz-number'+(items[i].dataset.answerStatus?' quiz-number-'+items[i].dataset.answerStatus:'')+(i===current?' quiz-number-active':'');button.setAttribute('aria-current',i===current?'step':'false')})}
  area.addEventListener('quiz-graded',()=>show(current));
  area.addEventListener('quiz-jump',e=>show(e.detail.index));
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
