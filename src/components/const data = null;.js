const data = null

const xhr = new XMLHttpRequest()
xhr.withCredentials = true

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText)
  }
})

xhr.open(
  'GET',
  'https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs',
)
xhr.setRequestHeader(
  'X-RapidAPI-Key',
  '72c2a8449amsh6052a0240129280p1b73c5jsn0c71d7e7de84',
)
xhr.setRequestHeader('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com')

xhr.send(data)
