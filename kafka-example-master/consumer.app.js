const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');
var express = require('express');
var http = require('http');
var router = express.Router();


try {
  
  const client = new kafka.Client(config.kafka_server);
  var data = [], messageData = [];
  Consumer = kafka.Consumer,
  consumer = new Consumer(client,
     [{ topic: 'example1', offset: 0}],
     {
         autoCommit: false
     }
 );

  consumer.on('message', async function(message) {
    
    console.log(message.value);
    
    data.push(message.value);
    messageData.push(data);

  })

  consumer.on('error', function(err) {
    console.log('error', err);
  });
}
catch(e) {
  console.log(e);
}

GetMessage();
function GetMessage() {
router.get("/api/employees", (req, res) => {
  messageData.forEach(function(message, error) {
    if (message) {
      res.send({key: message});
    } else if (error) {
      res.status(400).send("Error, something went wrong.");
    }
  });
});
}
module.exports = router;