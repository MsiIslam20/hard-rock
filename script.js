fetch('https://api.lyrics.ovh/CalvinHarris/summer')
  .then(response => response.json())
  .then(json => console.log(json))