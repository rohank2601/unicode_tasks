

var form = document.getElementById('form')


addEventListener('submit',function(e){
    var country = document.getElementsById('texts').value
    alert(country)
    e.preventDefault()
  
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api')
    .then((res) => res.json())
    .then((res) => console.log(res))

})