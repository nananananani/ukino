// scripts/quiz.js
document.addEventListener('DOMContentLoaded',()=>{
  const gen = document.getElementById('genBtn');
  if(!gen) return;
  gen.addEventListener('click', ()=>{
    const topic = document.getElementById('topicName').value || 'Topic';
    const count = parseInt(document.getElementById('numQ').value || '3',10);
    const samples = [
      {q:`Which of the following page replacement algorithms may suffer from Belady's Anomaly?`, a:['LRU','FIFO','Optimal','LFU'], correct:2},
      {q:`Which of the following always gives the lowest number of page faults, assuming the same reference string?`, a:['FIFO','Optimal','LRU','Clock Algorithm'], correct:2},
      {q:`Which algorithm maintains a stack of accessed pages?`, a:['FIFO','LRU','Optimal','MFU'], correct:2},
      {q:`Second chance algorithm uses which additional hardware/software support?`, a:['Modify bit only','Reference bit only','Frame bit only','Frequency counter'], correct:2},
    ];
    const selected = [];
    for(let i=0;i<count;i++) selected.push(samples[i % samples.length]);
    localStorage.setItem('ukino_quiz', JSON.stringify({topic,questions:selected}));
    // navigate to the quiz page
    window.location.href = 'quiz-page.html';
  });
});
