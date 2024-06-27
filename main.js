const playAndPauseBttn = document.getElementsByClassName("play-and-pause")[0];
const playPreviousBttn = document.getElementsByClassName("previous-button")[0];
const playNextBttn = document.getElementsByClassName("next-button")[0];
const pauseBttnIcon = document.getElementsByClassName("fa-pause")[0];
const playBttnIcon = document.getElementsByClassName("fa-play")[0];
const audio = document.getElementsByTagName("audio")[0];
const playList = [
  {
    artistName: "Adele",
    songName: "Set Fire To The Rain",
    src: "C:Userserka_Documentsdommusic-playerAdele - Set Fire To The Rain (Live at The Royal Albert Hall) (320).mp3",
  },
  {
    artistName: "Kylie Minogue",
    songName: "Slow",
    src: "C:Userserka_Documentsdommusic-playerKylie Minogue - Slow (Official Video) (320).mp3",
  },
  {
    artistName: "Rihanna",
    songName: "Umbrella",
    src: "C:Userserka_Documentsdommusic-playerRihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z (320).mp3",
  },
];

let currentSong = playList[0].src;
playAndPauseBttn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBttnIcon.classList.add("hide");
    pauseBttnIcon.classList.remove("hide");
  } else {
    audio.pause();
    playBttnIcon.classList.remove("hide");
    pauseBttnIcon.classList.add("hide");
  }
  console.log(audio.paused);
});
playNextBttn.addEventListener("click", () => {
  currentSong++;
  if (currentSong === playList.length) {
    currentSong = 0;
  }
  audio.src = currentSong;
  audio.play();
  console.log(currentSong);
});
playPreviousBttn.addEventListener("click", () => {
  currentSong--;
  if (currentSong === playList[0]) {
    currentSong = playList.length.src;
  }
  audio.src = currentSong;
  audio.play();
  console.log(currentSong);
});
