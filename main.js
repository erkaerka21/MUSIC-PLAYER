const playAndPauseBttn = document.getElementsByClassName(
  "play-and-pause-button"
)[0];
const playPreviousBttn = document.getElementsByClassName("previous-button")[0];
const playNextBttn = document.getElementsByClassName("next-button")[0];
const pauseBttnIcon = document.getElementByClassName("fa-pause");
const playBttnIcon = document.getElementByClassName("fa-play");
const audio = document.getElementsByTagName("audio")[0];
const playlist = [
  {
    artistName: "Adele",
    songName: "Set Fire To The Rain",
    src: "/Users/24LP7729/Desktop/new-javascript/MUSIC-PLAYER/Adele - Set Fire To The Rain (Live at The Royal Albert Hall) (320).mp3",
  },
  {
    artistName: "Kylie Minogue",
    songName: "Slow",
    src: "/Users/24LP7729/Desktop/new-javascript/MUSIC-PLAYER/Kylie Minogue - Slow (Official Video) (320).mp3",
  },
  {
    artistName: "Rihanna",
    songName: "Umbrella",
    src: "/Users/24LP7729/Desktop/new-javascript/MUSIC-PLAYER/Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z (320).mp3",
  },
];
let currentSong = 0;
playBttn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play;
  }
});
