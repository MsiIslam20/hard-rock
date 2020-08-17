fetch('https://api.lyrics.ovh/suggest/baby')
  .then(response => response.json())
  .then(json => getResult(json))

  const getResult = (data) => {
    for (let i = 0; i < 10; i++) {
      const element = data.data[i];
      const ul = document.getElementsByClassName("artist_name");
      // const li = document.createElement("li");
      ul.innerText = element.album.title;
      // ul.appendChild(li)
      
    }
    
  }