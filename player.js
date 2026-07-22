/*=========================================
            PHK MUSIC PLAYER
=========================================*/

if (musicList) {
    renderSongs();
}

function renderSongs() {

    let html = "";

    songs.forEach(song => {

        html += `

        <div class="music-item">

            <div class="music-cover">

                <img src="${song.cover}" alt="${song.title}">

            </div>

            <div class="music-info">

                <h3>${song.title}</h3>

                <p>${song.artist}</p>

                <span>${song.duration}</span>

            </div>

            <div class="music-buttons">

                <button
                    class="play-btn"
                    onclick="playSong('${song.file}')">

                    <i class="fa-solid fa-play"></i>

                </button>

                <a
                    href="${song.file}"
                    download
                    class="download-btn">

                    <i class="fa-solid fa-download"></i>

                </a>

            </div>

        </div>

        `;

    });

    musicList.innerHTML = html;

}

renderSongs();/*=========================================
            AUDIO PLAYER
=========================================*/

const audio = new Audio();

let currentSong = "";

function playSong(file) {

    if (currentSong === file && !audio.paused) {

        audio.pause();

        return;

    }

    currentSong = file;

    audio.src = file;

    audio.play().catch(err => {
    console.error(err);
});

}