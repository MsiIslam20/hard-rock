//Music Search button 
document.getElementById("searchBtn").addEventListener("click", function(){
  const getValue = document.getElementById("getValue").value;
  fetchSongs(getValue);
  const lyricsArea = document.getElementById('lyrics');
  lyricsArea.innerHTML = '';

})

// Get Songs from Server(API)
const fetchSongs = (getValue) => {

  fetch(`https://api.lyrics.ovh/suggest/${getValue}`)
  .then(response => response.json())
  .then(data => getSongsResult(data))
  .catch(error => console.log(error))

  const songResultArea = document.getElementById('getResult');
  songResultArea.innerHTML = '';

  const getSongsResult = (data) => {
    for (let i = 0; i < 10; i++) {
      const element = data.data[i];
      const songArtist = element.artist.name;
      const album = element.album.title;
      const duration = element.duration;
      const songTitle = element.title;

      //Display Search result
      songResultArea.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                <div class="col-md-9">
                                <h3 class="lyrics-name">${songTitle}</h3>
                                <p class="author lead">Album Name: <span>"${album}"</span</p>
                                <p class="author lead">Artist Name: <strong>"${songArtist}"</strong></p>
                                <p class="song-details">song duration : ${duration}s</p>
                                </div>
                                <div class="col-md-3 text-md-right text-center">
                                <button data-artist="${songArtist}" data-songTitle="${songTitle}" class="btn btn-success" id="btn-lyrics">Get Lyrics</button>
                                </div>
                                </div>`                          
    }  
  }
}

// Get lyrics button click
document.getElementById("getResult").addEventListener('click', e => {
  const clickedEl = e.target;

  if (clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttribute('data-artist');
    const songTitle = clickedEl.getAttribute('data-songTitle');

    fetchLyrics(artist, songTitle);
  }
});

// Get lyrics for song
const fetchLyrics = (artist , songTitle) => {

  fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
  .then(response => response.json())
  .then(data => getLyrics(data))
  .catch(error => console.log(error))

  const getLyrics = (data) => {
    const lyricsArea = document.getElementById('lyrics');
    lyricsArea.innerHTML = '';

    let lyrics = data.lyrics;
    if(lyrics == undefined){
      lyrics = `Song Lyrics Not Found. Try for another song`;
    }

    lyricsArea.innerHTML +=  `<h2 class="text-success mb-4">${songTitle} - <span class="artist-name">(${artist})</span></h2>
                              <pre class="lyric text-white">${lyrics}</pre>`
  }
};
