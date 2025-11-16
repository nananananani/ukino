// scripts/code.js
document.addEventListener('DOMContentLoaded', ()=>{
  const runBtn = document.getElementById('runCode');
  const editor = document.getElementById('codeEditor');
  const outputWrap = document.getElementById('outputWrap');
  const codeOut = document.getElementById('codeOutput');

  runBtn.addEventListener('click', ()=>{
    const code = editor.value || '';
    // Fake-run logic
    codeOut.innerText = 'Running...';
    outputWrap.classList.remove('hidden');

    setTimeout(()=>{
      if(code.includes('print') || code.includes('console.log')){
        codeOut.innerText = "Hello World\nProcess finished (simulated).";
      } else if (code.trim()==='') {
        codeOut.innerText = "No code entered.";
      } else {
        codeOut.innerText = "Executed (simulated): " + code.split('\n')[0].slice(0,120);
      }
    },700);
  });
});
