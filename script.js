const songs = [
    { title: "Avril Lavigne", file: "songs/Avril Lavigne- Wish You Were Here.mp3" },
    { title: "Owl City", file: "songs/owl city - fireflies.mp3" },
    { title: "Hungry eyes", file: "songs/Dirty Dancing - Hungry Eyes.mp3" },
	{ title: "Green Day", file: "songs/Green Day - Boulevard Of Broken Dreams.mp3"},
	{ title: "Green Day", file: "songs/11 Wake Me Up When September Ends.mp3"},
	{ title: "Cigarettes after sex", file: "songs/Heavenly.mp3"},
	{ title: "Cigarettes after sex", file: "songs/Sweet.mp3"},
	{ title: "Cigarettes after sex", file: "songs/Cry.MPEG"}
];

const songList = document.getElementById('songList');
const audioPlayer = document.getElementById('audioPlayer');

songs.forEach(song => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => {
        audioPlayer.src = song.file;
        audioPlayer.play();
    });
    songList.appendChild(li);
});
