const express = require('express');
const axios = require('axios');

const app = express();

app.use('/getResponse', async (req,res,next)=> {

    const url = 'https://randomuser.me/api/';
 
    //fetchAsync(url);
  const result = await axios.get(url)
  .then(response => {
    console.log('Response from third-party API:', response.data);
  })
  .catch(error => {
    console.error('Error making request:', error.message);
  });
  
  

})



module.exports = app;