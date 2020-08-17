// fetch('https://api.lyrics.ovh/suggest/baby')
//   .then(response => response.json())
//   .then(json => getResult(json))

//   const getResult = (data) => {
//     for (let i = 0; i < 10; i++) {
//       const element = data.data[i];
//       const ul = document.getElementsByClassName("artist_name");
//       // const li = document.createElement("li");
//       ul.innerText = element.album.title;
//       // ul.appendChild(li)
      
//     }  
//   }

const fetchIssues = () => {

  fetch('https://api.lyrics.ovh/suggest/patola')
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

  // for (var i = 0; i < issues.length; i++) {
  //   const {id, description, severity, assignedTo, status} = issues[i];

  //   issuesList.innerHTML +=   `<div class="well">
  //                             <h6>Issue ID: ${id} </h6>
  //                             <p><span class="label label-info"> ${status} </span></p>
  //                             <h3> ${description} </h3>
  //                             <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
  //                             <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
  //                             <a href="#" onclick="closeIssue(${id})" class="btn btn-warning">Close</a>
  //                             <a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
  //                             </div>`;
  // }
}

fetchIssues()