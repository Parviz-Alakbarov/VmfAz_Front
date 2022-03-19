$(function(){
	
  fetch('https://localhost:44337/api/settings/getCountries')
  .then(response => response.json())
  .then(data => console.log(data));

});