const playAndPauseBttn = document.getElementsByClassName("play-and-pause")[0];
const playPreviousBttn = document.getElementsByClassName("previous-button")[0];
const playNextBttn = document.getElementsByClassName("next-button")[0];
const pauseBttnIcon = document.getElementsByClassName("fa-pause")[0];
const playBttnIcon = document.getElementsByClassName("fa-play")[0];
const audio = document.getElementsByTagName("audio")[0];
const songName = document.getElementsByClassName("song-Name")[0];
const artistName = document.getElementsByClassName("artist-Name")[0];

const playList = [
  {
    artist_Name: "Adele",
    song_Name: "Set Fire To The Rain",
    src: "Adele - Set Fire To The Rain (Live at The Royal Albert Hall) (320).mp3",
    Image: "/Users/24LP7729/Desktop/new-javascript/MUSIC-PLAYER/adele.png",
  },
  {
    artist_Name: "Kylie Minogue",
    song_Name: "Slow",
    src: "Kylie Minogue - Slow (Official Video) (320).mp3",
    Image:
      "/Users/24LP7729/Desktop/new-javascript/MUSIC-PLAYER/kylie minogue.jpg",
  },
  {
    artist_Name: "Rihanna",
    song_Name: "Umbrella",
    src: "Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z (320).mp3",
    Image:
      "/Users/24LP7729/Desktop/new-javascript/MUSIC-PLAYER/rihanna umbrella.jpg",
  },
];

let currentSong = playList[0];
let i = 0;
playAndPauseBttn.addEventListener("click", () => {
  if (audio.paused) {
    audio.src = currentSong.src;
    audio.play();

    playBttnIcon.classList.add("hide");
    pauseBttnIcon.classList.remove("hide");
    console.log(songName);
    songName.textContent = currentSong.song_Name;
    artistName.textContent = currentSong.artist_Name;
  } else {
    audio.pause();
    playBttnIcon.classList.remove("hide");
    pauseBttnIcon.classList.add("hide");
  }
  console.log(audio.paused);
});
playNextBttn.addEventListener("click", () => {
  console.log(currentSong);
  i++;
  if (i === playList.length) {
    i = 0;
  }
  audio.src = playList[i].src;
  audio.play();
  // if (audio.paused) {
  //   audio.src = playList[i].src;
  //   audio.play();
  //   playBttnIcon.classList.add("hide");
  //   pauseBttnIcon.classList.remove("hide");
  // } else {
  //   audio.pause();
  //   playBttnIcon.classList.remove("hide");
  //   pauseBttnIcon.classList.add("hide");
  // }
  songName.textContent = playList[i].song_Name;
  artistName.textContent = playList[i].artist_Name;
  console.log(playList[i]);
});
playPreviousBttn.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = playList.length - 1;
  }
  audio.src = playList[i].src;
  audio.play();
  songName.textContent = playList[i].song_Name;
  artistName.textContent = playList[i].artist_Name;
  console.log(playList[i]);
});
