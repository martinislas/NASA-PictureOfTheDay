//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value

  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=f2CRQpBVnpDtPsdu3UTQaEODKu8flMIxvccmStvL&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if(data.media_type === 'image'){

        document.querySelector('img').src = data.hdurl
        document.querySelector('iframe').style.display = 'none';
        document.querySelector('img').style.display = 'block';


        }else if(data.media_type === 'video'){

        document.querySelector('iframe').src = data.url
        document.querySelector('img').style.display = 'none';
        document.querySelector('iframe').style.display = 'block';



        }

        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


//https://api.nasa.gov/planetary/apod?api_key=f2CRQpBVnpDtPsdu3UTQaEODKu8flMIxvccmStvL


//f2CRQpBVnpDtPsdu3UTQaEODKu8flMIxvccmStvL

