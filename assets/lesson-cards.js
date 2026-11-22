/* Shared one-question-at-a-time exercise template for every lesson section. */
(function(){
function init(){
 const normalize=v=>String(v??'').trim().toLocaleLowerCase('nl-NL').replace(/[.!?]+$/,'').replace(/\s+/g,' ');
 const lessonId=location.pathname.includes('day-013')?'day-013':location.pathname.includes('day-012')?'day-012':location.pathname.includes('day-011')?'day-011':location.pathname.includes('day-010')?'day-010':location.pathname.includes('day-009')?'day-009':location.pathname.includes('day-008')?'day-008':location.pathname.includes('day-007')?'day-007':location.pathname.includes('day-003')?'day-003':location.pathname.includes('day-002')?'day-002':'day-001';
 const explanations={"day-001":{"grammar":["情态动词 kan 与 ik 搭配；后面的 drinken 用原形。 · With ik, use kan; the main verb stays in the infinitive.","时间状语 Vandaag 放在句首时，限定动词 werk 必须紧跟其后。 · After fronted Vandaag, the finite verb werk comes next.","afspreken 是可分动词：we spreken ... af。 · The separable verb afspreken splits in a main clause.","wil 后接动词原形 afspreken。 · After wil, use the infinitive afspreken."],"listening":["对话明确提到 Amsterdam。 · The dialogue explicitly mentions Amsterdam.","half tien 是九点半（09:30），不是十点半。 · Half tien means 09:30.","Lisa 说她已经有预约：ik heb een afspraak。 · Lisa already has an appointment.","他们约在车站旁的咖啡馆。 · They agree to meet at the café beside the station."],"reading":["邮件邀请的日期是 donderdag（星期四）。 · The invitation specifies Thursday.","half tien 表示 09:30。 · Half tien is 09:30.","邮件要求 Emma 回复能否赴约。 · Emma is asked to confirm whether she can attend."],"knm":["不能赴约时应尽早通知家庭医生诊所，以便取消或改期。 · Contact the GP practice promptly to cancel or reschedule."],"review":["woon 是 ik 的现在时形式；国家名称为 Nederland。 · Use ik woon and the country name Nederland.","spreekt 与 zij/ze 搭配；语言名称是 Nederlands。 · Use zij/ze spreekt Nederlands.","情态动词 kan 放在第二位置，werken 留在句末。 · Put kan in second position and werken at the end.","gaan 的完成时使用 zijn：ik ben gegaan。 · The perfect tense of gaan takes zijn."]},"day-002":{"grammar":["geen 否定不定名词 melk；niet 通常否定形容词等。 · Use geen to negate an indefinite noun.","ei 的复数是 eieren，冠词变为 de。 · The plural of ei is eieren.","goedkoop 是形容词，因此用 niet 否定。 · Negate the adjective goedkoop with niet.","banaan 的复数是 bananen。 · The plural of banaan is bananen."],"listening":["对话说牛奶在奶酪旁边：naast de kaas。 · The milk is next to the cheese.","牛奶价格是 €1,50。 · The dialogue gives the price as €1.50.","Emma 买两盒牛奶：twee pakken。 · Emma buys two cartons."],"reading":["购物清单提到缺少 melk en brood。 · The shopping message says milk and bread are needed.","Lisa 说的时间是 17:30。 · Lisa gives 17:30 as the time."],"knm":["带有 statiegeld 标志的容器应送到回收点退押金。 · Return eligible containers to a collection point for the deposit."],"review":["ik 搭配情态动词 kan，不是 kun。 · The correct first-person form is kan.","gaan 的完成时助动词是 zijn：ben gegaan。 · Gaan takes zijn in the perfect tense.","drinken 的完成时通常用 hebben：heb gedronken。 · Drinken normally takes hebben.","荷兰语 half tien 是九点半。 · Dutch half tien means 09:30.","ik 后面用 kan。 · Use kan after ik."]}};
 explanations['day-003']={grammar:['moet 是 ik 的现在时形式；另一个动词用原形放在句末。 · Use moet with ik and place the main infinitive at the end.','uitstappen 是可分动词，主句中前缀 uit 放句末。 · The separable prefix uit goes to the end.','地点状语前置时，限定动词 neem 仍在第二位置。 · With a fronted place phrase, neem remains second.','moeten 后接动词原形 lopen。 · The modal moeten takes the infinitive lopen.'],listening:['对话从 Amsterdam Centraal 开始。 · The dialogue begins at Amsterdam Centraal.','对方建议乘坐 tram 2。 · The traveler recommends tram 2.','对方明确说 Nee, dat hoeft niet。 · The traveler says no transfer is needed.','应在 Museumplein 下车。 · Get off at Museumplein.','左转之后博物馆位于右侧。 · After turning left, the museum is on the right.'],reading:['Lisa 说火车晚点：vertraging。 · Lisa says her train is delayed.','twintig minuten later 是晚二十分钟。 · Twintig means twenty.','她要求在 hoofdingang（正门）等候。 · She asks Emma to wait at the main entrance.','她提议先去咖啡馆喝咖啡。 · They plan to have coffee.'],knm:['使用 OVpay 乘车需要进站／上车刷卡及出站／下车刷卡。 · OVpay requires checking in and out.','出发前应查看时刻表及晚点情况。 · Check the timetable and delays.','进出站应使用同一张卡或同一部手机。 · Use the same card or phone to check out.'],review:['ik 搭配 kan。 · The modal form with ik is kan.','geen 否定不定名词 melk。 · Use geen with an indefinite noun.','ei 的复数是 eieren，复数冠词为 de。 · The plural is de eieren.','gaan 的完成时使用 ben。 · Gaan takes zijn in the perfect tense.','half tien 表示九点半。 · Half tien is 09:30.','ik moet 后接完整动词原形 uitstappen。 · Use moet with ik and the infinitive uitstappen.']};
 explanations['day-007']={"grammar":["可分动词 aanvragen 的目的结构为 aan te vragen。 · Put te between the separable prefix and the verb.","om ... te bewijzen 表示目的。 · Use te before bewijzen to express purpose.","inschrijven 在目的结构中变为 in te schrijven。 · Use in te schrijven.","不必等待用 hoeft niet te wachten。 · Use hoeft niet te for no obligation.","ik moet 表示我必须。 · Ik moet means I must.","Dat hoeft niet 表示那不是必须的。 · Dat hoeft niet means it is unnecessary."],"listening":["Emma 来市政府办理登记。 · Emma comes to register.","Emma 出示护照。 · She shows her passport.","工作人员要求填写地址与出生日期。 · The form asks for address and date of birth.","ongeveer tien minuten 是大约十分钟。 · Approximately ten minutes."],"reading":["邮件明确说明登记搬家。 · The confirmation is for reporting a move.","要求携带有效身份证件。 · Bring a valid identity document.","预约为周四十点半。 · The appointment is Thursday at 10:30.","U hoeft ... niet 表示不必在家填表。 · The form need not be completed at home."],"knm":["应核对市政府官网与预约确认。 · Check the official municipality website and confirmation.","无法赴约时应及时取消或改期。 · Cancel or reschedule promptly.","不同业务和市政府的预约要求不同。 · Requirements depend on the service and municipality."],"review":["句首 Daarna 后变位动词 ga 仍居第二位。 · Ga remains in second position.","belt 后需要宾语代词 me。 · Use object pronoun me.","geen 否定不定名词 warm water。 · Use geen with an indefinite noun.","gaan 的完成时用 ben。 · Gaan takes zijn.","ik ziek ben 是 omdat 从句的正确语序。 · The verb goes last in the omdat clause.","ik 搭配 kan。 · Use kan with ik."]};
 explanations['day-008']={"grammar":["als 从句中 ik 搭配 ben，动词放在从句末尾。 · Use ben with ik at the end of the als clause.","前置条件从句后主句倒装为 kom ik。 · After a fronted condition, use the inversion kom ik.","ik 搭配 kan，动词组 kan werken 位于从句末尾。 · Use kan with ik; kan werken closes the subordinate clause.","de vergadering 是单数，因此用 begint。 · The singular subject de vergadering takes begint.","ik 的 zijn 形式是 ben。 · The form of zijn with ik is ben.","dat 从句中情态动词与原形为 kan werken。 · The final verb cluster is kan werken."],"listening":["Emma 明确说 Ik bel om me ziek te melden。 · Emma calls to report sick.","Emma 今天不能工作。 · Emma cannot work today.","如果明天好转，Emma 会通知主管。 · Emma will update her supervisor if she feels better tomorrow.","她预计周五返岗，但尚未确定。 · She expects to return Friday but is not certain."],"reading":["邮件开头明确表示 ziekmelden。 · The message is a sick-leave notice.","Emma 说 vandaag niet werken。 · Emma cannot work today.","预计返岗日为 vrijdag。 · The expected return day is Friday.","Ik houd je op de hoogte 表示保持信息更新。 · She promises to keep Mark informed."],"knm":["生病应按雇主的病假报告流程通知。 · Follow your employer's sickness-reporting procedure.","职业健康医生负责工作能力相关的医疗评估。 · The occupational physician handles medical fitness-for-work questions.","主管通常无权要求员工提供具体诊断。 · A supervisor generally cannot require a diagnosis."],"review":["可分动词 inschrijven 在目的结构中为 in te schrijven。 · Use in te schrijven after om.","不必用 hoeft niet te 表示。 · Use hoeft niet te for no obligation.","Daarna 位于句首，主句倒装为 ga ik。 · Fronted Daarna gives ga ik.","omdat 从句的动词 ben 放句末。 · Put ben at the end of the omdat clause.","gaan 的完成时使用 ben。 · The perfect tense of gaan takes ben.","否定不定名词 warm water 用 geen。 · Use geen with an indefinite noun."]};
 explanations['day-012']={"grammar":["laten 的 ik 形式是 laat。 · The ik form of laten is laat.","在 kunnen 后用不定式 laten。 · Use the infinitive laten after kunnen.","zodat 从句的情态动词是 kan。 · The modal in the zodat clause is kan.","从句的变位动词 is 位于末尾。 · Is comes last in this subordinate clause.","als 表示条件。 · Als introduces a condition."],"listening":["客户要开立支付账户。 · The customer wants a current account.","工作人员要求身份证明。 · The employee asks for ID.","银行应用可设置付款限额。 · The app can set a payment limit.","遗失银行卡应立即冻结。 · Block a lost card promptly."],"reading":["银行先核实身份。 · The bank first verifies identity.","信息在安全银行环境内提供。 · Information is provided in the secure banking environment.","PIN 不能透露给别人。 · Never share your PIN.","使用官方渠道联系银行。 · Use official bank channels."],"knm":["PIN 应保密。 · Keep your PIN private.","异常扣款应通过官方渠道联系银行。 · Contact the bank through official channels about an unfamiliar debit.","不同银行条件不同。 · Bank requirements vary."],"review":["als 从句使用 is。 · Use is in the als clause.","复数 slaapkamers 搭配 zijn。 · Plural slaapkamers takes zijn.","zou 后接 kunnen。 · Use kunnen after zou.","liever 表示更愿意。 · Liever expresses preference.","句首 voordat 从句后主句倒装。 · Invert after a fronted voordat clause.","geen 否定不定名词。 · Geen negates an indefinite noun."]};
 explanations['day-013']={"grammar":["omdat 从句动词 is 放句末。 · Is comes last in an omdat clause.","want 后保持主句语序。 · Want preserves main-clause word order.","句首 als 从句后倒装：bel ik。 · Invert the main clause: bel ik.","单数 bestelling 的被动语态用 wordt。 · Singular bestelling takes wordt.","间接是否问句使用 of。 · Use of in an indirect yes/no question."],"listening":["客户收到可疑短信。 · The customer received a suspicious SMS.","短信要求支付两欧元。 · The SMS asks for two euros.","客户没有点击链接。 · The customer did not click.","建议通过官方网站核实。 · Check via the official website."],"reading":["邮件提醒防范可疑短信。 · The message warns about suspicious SMS.","网店明确否认发送这些短信。 · The webshop denies sending the messages.","订单应在官方账户核实。 · Check the order in the official account.","泄露资料后应联系银行。 · Contact the bank after sharing sensitive data."],"knm":["通过官方应用或网站核实。 · Verify through official apps or websites.","不要分享验证码。 · Never share verification codes.","泄露银行资料应立即联系银行。 · Contact the bank promptly after exposing credentials."],"review":["zodat 引导目的从句。 · Zodat introduces a purpose clause.","ik laat 是正确变位。 · Ik laat is the correct conjugation.","als 引导条件从句。 · Als introduces a conditional clause.","gegevens 是资料的复数形式。 · Gegevens is the plural noun for data.","liever 表示更愿意。 · Liever expresses preference.","复数 slaapkamers 使用 zijn。 · Plural slaapkamers takes zijn."]};
 explanations['day-011']={"grammar":["als 从句的变位动词位于句末：is。 · The finite verb goes last in the als clause.","句首条件从句后主句倒装：controleer ik。 · Invert the main clause after a fronted conditional clause.","hoeveel 用于询问金额。 · Hoeveel asks how much.","welke 用于询问哪种费用。 · Welke asks which costs.","两个卧室是复数，因此使用 er zijn。 · Use er zijn with plural bedrooms.","一间储藏室是单数，因此使用 er is。 · Use er is with singular berging."],"listening":["基本租金为 950 欧元。 · Base rent is €950.","服务费为 45 欧元。 · Service charges are €45.","能源费用需另付。 · Utilities are paid separately.","看房时间为星期六十一点。 · The viewing is Saturday at 11."],"reading":["面积约为 65 平方米。 · The floor area is approximately 65 m².","950 加 45 等于 995 欧元。 · €950 plus €45 equals €995.","12 月 1 日起可入住。 · Available from 1 December.","广告要求提供姓名和电话。 · The listing asks for name and phone number."],"knm":["签约前核对价格、押金和条件。 · Check rent, deposit and terms before signing.","BRP 登记问题可询问市政府。 · Ask the municipality about BRP registration.","租赁纠纷可寻求适当法律或租赁援助。 · Seek appropriate rental or legal assistance."],"review":["zou 后可使用 kunnen 表达礼貌请求。 · Zou can be followed by kunnen.","liever 表示更愿意。 · Liever expresses preference.","句首 voordat 从句后主句倒装。 · Invert the main clause after a fronted voordat clause.","句首 nadat 从句后主句倒装。 · Invert after a fronted nadat clause.","geen 否定不定名词短语。 · Geen negates an indefinite noun phrase.","gaan 的完成时使用 zijn：ben gegaan。 · Gaan uses zijn in the perfect."]};
 explanations['day-010']={"grammar":["礼貌请求使用 zou + kunnen + 原形。 · A polite request uses zou + kunnen + infinitive.","对 u 的礼貌请求可用 Zou u ... kunnen ...? · Use Zou u ... kunnen ...? for a polite request.","liever 表示更愿意。 · Liever expresses a preference.","het liefst 表示最希望。 · Het liefst expresses the strongest preference.","daarom 放句首后要接变位动词 wil。 · After fronted daarom, the finite verb wil follows.","询问能否换时间时，用 Kunnen we ...? · Ask about a new time with Kunnen we ...?"],"listening":["原预约是星期四十点半。 · The original appointment is Thursday at 10:30.","Sara 临时需要上班。 · Sara unexpectedly has to work.","她九点需要送孩子上学。 · She takes her child to school at nine.","最终确认星期五下午两点十五分。 · The confirmed time is Friday at 14:15."],"reading":["原预约已取消。 · The original appointment has been cancelled.","新预约是 14:15。 · The new appointment is at 14:15.","要求提前十分钟到前台。 · Arrive at reception ten minutes early.","若仍无法赴约，应尽快联系诊所。 · Contact the practice promptly if you still cannot attend."],"knm":["无法赴约时应尽早联系。 · Contact the provider early if you cannot attend.","取消条款因机构而异。 · Cancellation terms vary by provider.","确认新的日期与确认信息。 · Verify the new date and confirmation."],"review":["句首 voordat 从句后主句动词先行。 · After a fronted voordat clause, the main verb comes first.","句首 nadat 从句后主句动词先行。 · After a fronted nadat clause, the main verb comes first.","om ... in te schrijven 表示目的。 · Om ... in te schrijven expresses purpose.","句首 als 从句后主句使用倒装。 · After a fronted als clause, the main clause uses inversion.","geen 否定不定名词短语。 · Geen negates an indefinite noun phrase.","gaan 的完成时使用 zijn：ben gegaan。 · Gaan takes zijn in the perfect: ben gegaan."]};
 explanations['day-009']={"grammar":["voordat 表示在付款之前。 · Voordat means before paying.","句首时间从句之后主句倒装：controleer ik。 · A fronted time clause is followed by controleer ik.","ik 的现在时为 betaal。 · The present-tense form with ik is betaal.","nadat 表示在完成付款之后。 · Nadat means after the payment is completed.","从句位于句首，主句倒装为 stuur ik。 · The main clause uses stuur ik after the opening subordinate clause.","完成时使用 heb overgemaakt。 · The perfect tense is heb overgemaakt."],"listening":["Emma 不完全理解付款提醒。 · Emma does not fully understand the payment reminder.","金额为 €68,50。 · The amount is €68.50.","付款期限为 25 november。 · The due date is 25 November.","无法按时付款时可协商付款安排。 · She can discuss a payment plan."],"reading":["账单金额为 €68,50。 · The invoice is €68.50.","最迟付款日期为 25 november。 · The deadline is 25 November.","转账备注要填写发票号码。 · Include the invoice number in the transfer reference.","不能按时付款时应联系对方。 · Contact the creditor if you cannot pay on time."],"knm":["先核实账单与发件人。 · Verify the invoice and sender first.","可以主动协商延期或分期。 · Ask about an extension or instalments.","核对收款人与账号，防止错误或诈骗。 · Check the recipient and account number."],"review":["句首 voordat 从句后使用 controleer ik。 · Use controleer ik after the opening voordat clause.","句首 nadat 从句后使用 stuur ik。 · Use stuur ik after the opening nadat clause.","als 从句在前时主句使用 blijf ik。 · Use blijf ik after the als clause.","目的结构为 in te schrijven。 · The purpose construction is in te schrijven.","否定不定名词用 geen。 · Use geen for an indefinite noun.","gaan 的完成时助动词是 ben。 · Gaan takes ben in the perfect tense."]};
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
    feedback.textContent=(correct?'✓ 正确\nCorrect':'✗ 错误\nIncorrect\n正确答案\nCorrect answer: '+expected+'。\n'+(explanations[lessonId]?.[section]?.[index]||'请对照课文或语法说明。 · Review the lesson explanation.')).replace(/ · /g,'\n');feedback.style.whiteSpace='pre-line';
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
  area.after(numberNav);
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
/* Dutch audio with visible status and an explicit fallback on mobile browsers. */
let dutchAudio=null,dutchSpeechQueue=[],dutchSpeechSession=0,dutchAudioTimer=null;
function dutchAudioStatus(message,type){
 let status=document.getElementById('dutch-audio-status');
 if(!status){
  status=document.createElement('div');
  status.id='dutch-audio-status';
  status.setAttribute('role','status');
  status.setAttribute('aria-live','polite');
  document.body.append(status);
 }
 status.hidden=false;
 status.textContent=message;
 const error=type==='error',playing=type==='playing';
 status.style.cssText='display:block;position:fixed;bottom:calc(12px + env(safe-area-inset-bottom, 0px));left:12px;right:12px;z-index:9999;margin:auto;max-width:520px;padding:12px 15px;border-radius:12px;border:2px solid '+(error?'#c56f72':playing?'#6c9d7e':'#b6cabb')+';box-shadow:0 4px 20px #0002;font:14px/1.5 system-ui;background:'+(error?'#fff0f0':playing?'#effaf2':'#f5fff6')+';color:'+(error?'#873b43':'#1d4930')+';';
}

function stopDutchSpeech(){
 dutchSpeechSession++;
 dutchDialogueActive=false;
 if(dutchAudioTimer){clearTimeout(dutchAudioTimer);dutchAudioTimer=null}
 if(dutchAudio){dutchAudio.pause();dutchAudio.removeAttribute('src');dutchAudio=null}
 dutchSpeechQueue=[];
 if('speechSynthesis' in window)window.speechSynthesis.cancel();
}
function dutchSpeechFallback(lines,session,options,reason){
 if(session!==dutchSpeechSession)return;
 if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){
  dutchAudioStatus('无法播放荷兰语音频 · Dutch audio failed ('+reason+'). Check your connection and try again.','error');return;
 }
 const synth=window.speechSynthesis;
 const voices=synth.getVoices();
 const voice=voices.find(v=>v.lang.toLowerCase()==='nl-nl')||voices.find(v=>v.lang.toLowerCase().startsWith('nl'));
 if(!voice){
  dutchAudioStatus('荷兰语音频无法播放 · Dutch audio failed ('+reason+'). No Dutch system voice found. Check internet access or install Dutch (Netherlands) under iPhone Accessibility → Read & Speak → Voices.','error');return;
 }
 dutchAudioStatus('正在尝试设备荷兰语语音 · Trying the Dutch device voice…','loading');
 let index=0;
 function next(){
  if(session!==dutchSpeechSession||index>=lines.length)return;
  const utterance=new SpeechSynthesisUtterance(lines[index]);
  utterance.lang='nl-NL';utterance.voice=voice;utterance.rate=options.rate||0.85;
  utterance.pitch=options.alternatePitch?(index%2?0.9:1.12):1;
  dutchSpeechQueue.push(utterance);
  utterance.onstart=()=>dutchAudioStatus('正在播放荷兰语 · Playing Dutch pronunciation','playing');
  utterance.onend=()=>{index++;if(index===lines.length)dutchAudioStatus('播放完成 · Playback finished','done');else next()};
  utterance.onerror=e=>dutchAudioStatus('设备语音播放失败 · Device voice failed: '+(e.error||'unknown'),'error');
  synth.speak(utterance);if(synth.paused)synth.resume();
 }
 next();
}
function speakDutchText(text,options={}){
 const lines=(Array.isArray(text)?text:[text]).map(s=>String(s||'').trim()).filter(Boolean);
 if(!lines.length)return;
 stopDutchSpeech();
 const session=dutchSpeechSession;
 let index=0,failed=false;
 dutchAudioStatus('正在加载荷兰语音频 · Loading Dutch audio…','loading');
 const audio=new Audio();dutchAudio=audio;audio.preload='auto';
 function fail(reason){
  if(session!==dutchSpeechSession||failed)return;
  failed=true;if(dutchAudioTimer){clearTimeout(dutchAudioTimer);dutchAudioTimer=null}
  audio.pause();dutchSpeechFallback(lines.slice(index),session,options,reason);
 }
 function playNext(){
  if(session!==dutchSpeechSession||index>=lines.length||failed)return;
  const sentence=lines[index];
  audio.src='https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=nl&q='+encodeURIComponent(sentence);
  dutchAudioTimer=setTimeout(()=>fail('timeout'),12000);
  try{
   const playback=audio.play();
   if(playback&&typeof playback.catch==='function')playback.catch(e=>fail(e.name||'play rejected'));
  }catch(e){fail(e.name||'play error')}
 }
 audio.addEventListener('playing',()=>{if(dutchAudioTimer){clearTimeout(dutchAudioTimer);dutchAudioTimer=null}dutchAudioStatus('正在播放荷兰语 · Playing Dutch pronunciation','playing')});
 audio.addEventListener('ended',()=>{if(session!==dutchSpeechSession)return;index++;if(index===lines.length)dutchAudioStatus('播放完成 · Playback finished','done');else{dutchAudioStatus('正在加载下一句 · Loading next sentence…','loading');playNext()}});
 audio.addEventListener('error',()=>fail('audio request error'));
 playNext();
}
/* Character-aware Dutch dialogue: one utterance per turn, one pass per tap. */
let dutchDialogueActive=false;
function speakDutchDialogue(turns,options={}){
 if(dutchDialogueActive)return; // Ignore repeated taps while the dialogue is playing.
 const rows=turns.map((turn,i)=>typeof turn==='string'?{speaker:i%2?'Man':'Emma',text:turn}:turn).filter(t=>t&&t.text&&String(t.text).trim());
 if(!rows.length)return;
 stopDutchSpeech();
 const session=dutchSpeechSession;
 if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){
  dutchAudioStatus('浏览器不支持荷兰语对话朗读 · Dialogue speech is unavailable.','error');return;
 }
 const synth=window.speechSynthesis;
 const voices=synth.getVoices().filter(v=>v.lang.toLowerCase().startsWith('nl'));
 if(!voices.length){
  dutchAudioStatus('没有可用的荷兰语语音 · No Dutch voice installed on this device.','error');return;
 }
 const femaleHints=/female|vrouw|fem|claire|ellen|lena|lotte|fleur/i;
 const maleHints=/male|man|masc|ruben|maarten|david|thomas|jeroen|frank/i;
 const femaleVoices=voices.filter(v=>femaleHints.test(v.name)&&!maleHints.test(v.name));
 const maleVoices=voices.filter(v=>maleHints.test(v.name)&&!femaleHints.test(v.name));
 const primaryFemale=femaleVoices[0]||voices[0];
 const secondaryFemale=femaleVoices.find(v=>v!==primaryFemale)||voices.find(v=>v!==primaryFemale&&!maleVoices.includes(v))||primaryFemale;
 const primaryMale=maleVoices[0]||voices.find(v=>v!==primaryFemale)||primaryFemale;
 const speakerNames=[...new Set(rows.map(r=>String(r.speaker)))];
 const femaleNames=new Set(['Emma','Lisa','Vrouw']);
 const voiceFor=(name)=>{
  if(name==='Emma'||name==='Vrouw')return primaryFemale;
  if(name==='Lisa')return secondaryFemale;
  return primaryMale;
 };
 dutchDialogueActive=true;
 let index=0;
 function finish(message,type){
  if(session!==dutchSpeechSession)return;
  dutchDialogueActive=false;
  dutchSpeechQueue=[];
  dutchAudioStatus(message,type);
 }
 function next(){
  if(session!==dutchSpeechSession)return;
  if(index>=rows.length){finish('对话播放完成 · Dialogue finished (once)','done');return}
  const row=rows[index],name=String(row.speaker),utterance=new SpeechSynthesisUtterance(String(row.text).trim());
  const voice=voiceFor(name);
  utterance.lang='nl-NL';utterance.voice=voice;utterance.rate=options.rate||0.88;
  const isFemale=femaleNames.has(name);
  utterance.pitch=voice===primaryFemale&&name==='Lisa'?1.13:voice===primaryFemale&&!isFemale?0.8:1;
  dutchSpeechQueue.push(utterance);
  utterance.onstart=()=>{if(session===dutchSpeechSession)dutchAudioStatus(name+' · '+(index+1)+' / '+rows.length,'playing')};
  utterance.onend=()=>{if(session!==dutchSpeechSession)return;index++;next()};
  utterance.onerror=e=>finish('对话播放失败 · Dialogue playback error: '+(e.error||'unknown'),'error');
  synth.speak(utterance);
  if(synth.paused)synth.resume();
 }
 next();
}
function pronounceDutchCard(entry){speakDutchText(String(entry||'').split(';')[0],{rate:0.85})}
