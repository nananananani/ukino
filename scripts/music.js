// scripts/music.js
document.addEventListener('DOMContentLoaded',()=>{
  const audio = document.getElementById('ukinoAudio');
  const rainBtn = document.getElementById('rainBtn');
  const fireBtn = document.getElementById('fireBtn');
  const playBtn = document.getElementById('playBtn');
  const stopBtn = document.getElementById('stopBtn');

  let track = null;
  rainBtn.addEventListener('click', ()=>{ track='assets/audio/rain.mp3'; audio.src = track; audio.play(); });
  fireBtn.addEventListener('click', ()=>{ track='assets/audio/fireplace.mp3'; audio.src = track; audio.play(); });
  playBtn.addEventListener('click', ()=>{ if(audio.src){ audio.play(); }});
  stopBtn.addEventListener('click', ()=>{ audio.pause(); audio.currentTime=0;});
});
