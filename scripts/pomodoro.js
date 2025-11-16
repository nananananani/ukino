// scripts/pomodoro.js
document.addEventListener('DOMContentLoaded', ()=>{
  const startBtn = document.getElementById('startPom');
  const minutesInput = document.getElementById('pomMinutes');
  const intervalsInput = document.getElementById('pomIntervals');
  const timerEl = document.getElementById('pomTimer');
  const crumbsEl = document.getElementById('crumbs');

  let timerID = null, current = 0, seconds = 0, total = 0, intervalCount = 0;

  function renderCrumbs(n){
    crumbsEl.innerHTML = '';
    for(let i=0;i<n;i++){
      const d = document.createElement('div'); d.className='crumb';
      crumbsEl.appendChild(d);
    }
  }
  function renderTime(sec){
    const m = String(Math.floor(sec/60)).padStart(2,'0');
    const s = String(sec%60).padStart(2,'0');
    timerEl.innerText = `${m}:${s}`;
  }

  startBtn.addEventListener('click', ()=>{
    if(timerID){
      clearInterval(timerID); timerID=null; startBtn.innerText='Start'; return;
    }
    const mins = parseInt(minutesInput.value || '25',10);
    const inter = parseInt(intervalsInput.value || '4',10);
    seconds = mins*60; intervalCount = inter; current = 0;
    renderCrumbs(inter);
    renderTime(seconds);
    startBtn.innerText = 'Pause';
    timerID = setInterval(()=>{
      seconds--;
      if(seconds<=0){
        // mark a crumb done
        const crumbs = crumbsEl.children;
        if(crumbs[current]) crumbs[current].classList.add('done');
        current++;
        if(current >= intervalCount){
          clearInterval(timerID); timerID=null; startBtn.innerText='Done';
          renderTime(0);
        } else {
          // reset seconds for next interval
          seconds = mins*60;
        }
      }
      renderTime(seconds);
    },1000);
  });
});
