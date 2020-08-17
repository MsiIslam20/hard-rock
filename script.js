document.getElementById("searchBtn").addEventListener("click", function(){
  const getValue = document.getElementById("getValue").value;
  fetchIssues(getValue);
  const issuesList = document.getElementById('lyrics');
  issuesList.innerHTML = '';

})

const fetchIssues = (getValue) => {

  fetch(`https://api.lyrics.ovh/suggest/${getValue}`)
  .then(response => response.json())
  .then(json => getResult(json))
  .catch(error => console.log(error))

  const issuesList = document.getElementById('getResult');
  issuesList.innerHTML = '';

  const getResult = (data) => {
    for (let i = 0; i < 10; i++) {
      const element = data.data[i];
      const name = element.artist.name;
      const title = element.title;

      
      issuesList.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                <div class="col-md-9">
                                <h3 class="lyrics-name">${title}</h3>
                                <p class="author lead">Album by <span>${name}</span></p>
                                </div>
                                <div class="col-md-3 text-md-right text-center">
                                <button data-artist="${name}" data-songTitle="${title}" class="btn btn-success" id="btn-lyrics">Get Lyrics</button>
                                </div>
                                </div>`
                                
    }  
    // Get lyrics button click
document.getElementById("getResult").addEventListener('click', e => {
  const clickedEl = e.target;

  if (clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttribute('data-artist');
    const songTitle = clickedEl.getAttribute('data-songTitle');

    getLyrics(artist, songTitle);
  }
});
  }
}



// Get lyrics for song
const getLyrics = (artist , songTitle) => {

  fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
  .then(response => response.json())
  .then(json => getLyricsSingle(json))
  .catch(error => console.log(error))

  const getLyricsSingle = (data) => {
    const issuesList = document.getElementById('lyrics');
    issuesList.innerHTML = '';

    let lssss = data.lyrics;

    if(lssss == undefined){
      lssss = `Song Lyrics Not Found. Try for another song`;
    }

    issuesList.innerHTML +=  `<h2 class="text-success mb-4">${songTitle} - <span class="artist-name">(${artist})</span></h2>
    <pre class="lyric text-white">${lssss}</pre>`
  }



}
