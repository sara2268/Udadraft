/* Global Variables */
const postData = async ( url = '', data = {})=>{
    console.log(data)
    const response = await fetch(url, {
     method: 'POST', 
     credentials: 'same-origin', 
     headers: {
        'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
   });

   try {
     const data = await response.json();
      console.log('reponse data', newData);
      return data
     }catch(error) {
       console.log('error', error);
     }
  }
  
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ d.getMonth()+1 +'.'+ d.getFullYear();
const baseUrl = 'http//api.openweathermap.org/data/2.5/weather?zip={zipCode},{countryCode}'
const apiKey = '&appid=cf689776af5ab780dcf85fcaf87b3350';
const zipCode = document.querySelector('#zip');
const feelings = document.querySelector('#feelings');
const temp = data.main.temp; 
const generateBtn = document.querySelector('#generate')
 document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const zipCode = document.querySelector('#zip').value;
  const feelings = document.querySelector('#feelings').value;
  getData('/all',)
  
  .then(function(data){
      console.log(data);
    postData('/addfeelings', {feelings:data.feelings, zip:data.zip} );
  })
  .then(updateUI)
  }
  
  const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const data = await request.json();
    document.getElementById('data').innerHTML = data.newData;
    document.getElementById('temp').innerHTML = data.temp;
    document.getElementById('content').innerHTML = data.content;

  }catch(error){
    console.log('error', error);
  }

  const retrieveData = async (url='', data = {}) =>{ 
    const request = await fetch(url);
    try {
    const newData = await request.json()
    }
    catch(error) {
      console.log("error", error);
      
    }
  }