const express = require('express');
const app = express();
const markerPorts = 9999;
app.use('/',express.static(__dirname));
app.get('/', (req, res)=> {
  res.sendFile(`index.html`,{root: __dirname});
});
app.listen(`${markerPorts}`, ()=> {
  console.log(`marker pages server is on ${markerPorts}`);
});