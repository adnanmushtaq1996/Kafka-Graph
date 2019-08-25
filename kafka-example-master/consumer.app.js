const kafka = require('kafka-node');
var requestify = require('requestify');
const config = {
  kafka_topic: 'example1',
  kafka_server: 'localhost:2181',
};

try {

  const client = new kafka.Client(config.kafka_server);
  var data = [], messageData = [];
  Consumer = kafka.Consumer,
    consumer = new Consumer(client,
      [{ topic: 'example2', offset: 0 }],
      {
        autoCommit: false
      }
    );

  consumer.on('message', async function (message) {
    console.log('here...')
    console.log(message.value);

    // data.push(message.value);
    // messageData.push(data);

    requestify.post('http://localhost:3000/stream', message.value)
      .then(function (response) {
        console.log('data sending to stream node.js')
      });

  })

  consumer.on('error', function (err) {
    console.log('error', err);
  });
}
catch (e) {
  console.log(e);
}

