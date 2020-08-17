document.getElementById("searchBth").addEventListener("click", function(){
  const getValue = document.getElementById("getValue").value;
  fetchIssues(getValue)
})



const fetchIssues = (getValue) => {

  fetch(`https://api.lyrics.ovh/suggest/${getValue}`)
  .then(response => response.json())
  .then(json => getResult(json))

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
                                <button class="btn btn-success">Get Lyrics</button>
                                </div>
                                </div>`
    }  
  }
}