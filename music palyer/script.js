document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');

    const songs = [
        {
            title: 'Song 1',
            artist: 'Artist 1',
            src: 'path_to_your_audio_file1.mp3'
        },
        {
            title: 'Song 2',
            artist: 'Artist 2',
            src: 'path_to_your_audio_file2.mp3'
        },
        {
            title: 'Song 3',
            artist: 'Artist 3',
            src: 'path_to_your_audio_file3.mp3'
        }
    ];

    let songIndex = 0;

    function loadSong(song) {
        title.innerText = song.title;
        artist.innerText = song.artist;
        audio.src = song.src;
    }

    function playSong() {
        audio.play();
        playButton.innerText = 'Pause';
    }

    function pauseSong() {
        audio.pause();
        playButton.innerText = 'Play';
    }

    function prevSong() {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songIndex]);
        playSong();
    }

    function nextSong() {
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songs[songIndex]);
        playSong();
    }

    playButton.addEventListener('click', () => {
        const isPlaying = !audio.paused;
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);

    // Load the first song initially
    loadSong(songs[songIndex]);
});
