const songs = [
    "MiyaGi & Andy Panda - Minor.mp3",
    "NЮ - Больше не полетаем.mp3",
    "oldy, найтивыход - забудь.mp3",
    "Zivert - Многоточия.mp3",
    "Алена Швец. - Вино и сигареты.mp3",
    "Скриптонит - Положение.mp3",
  ];
  const player = document.getElementById("player");
  
  const createSongList = () => {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(songs[i]));
      list.appendChild(item);
    }
    return list;
  };
  
  const songList = document.getElementById("songList");
  songList.appendChild(createSongList());
  const links = document.querySelectorAll("li");
  for (const link of links) {
    link.addEventListener("click", setSong);
  }
  
  function setSong(e) {
    document.querySelector("#headphones").classList.remove("pulse");
  
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;
    document.getElementById(
      "currentSong"
    ).innerText = `Now Playing:  ${e.target.innerText}`;
  
    player.load();
    player.play();
  
    document.querySelector("#headphones").classList.add("pulse");
  }
  
  function playAudio() {
    if (player.readyState) {
      player.play();
    }
  }
  
  function pauseAudio() {
    player.pause();
  }
  
  const slider = document.getElementById("volumeSlider");
  slider.oninput = function (e) {
    const volume = e.target.value;
    player.volume = volume;
  };
  
  function updateProgress() {
    if (player.currentTime > 0) {
      const progressBar = document.getElementById("progress");
      progressBar.value = (player.currentTime / player.duration) * 100;
    }
  }

  var progress_width=300; // Нужно задать ширину прогрессбара
playhead.style.width=progress_width+"px";
playhead.onclick=function(e){
    var x=e.pageX;
    var elem = document.getElementById("playhead");
    ww = elem.offsetWidth;
    var ll = 0;
    while (elem){
        ll += elem.offsetLeft;
        elem = elem.offsetParent;
    }
    var new_currentTime=(x-ll)/progress_width*audiotrack.duration;
    audioTrack.currentTime=new_currentTime;
    updatePlayhead();
}
  
  