# Kafka-Graph
Plotting graph with values  from Real time Kafka Producer and Consumer


We have 3 microservices now,
1. node.js websocket server to stream data to frontend 
2. consumer app
3. producer app

start node server:
```
npm install
node app.js 
```

your html file is under public/index.html

In browser open, `http://localhost:3000`


now start producer and consumer,

```
node consumer.app.js
node producer.app.js
```

take network panel in your browser
inside ws: you can see our socket running

Now pass the value from consumer to http://localhost:3000/stream  using requestify npm package

# Architecture

producer ----> kafka ------> consumer -------> node.js ws /stream route <------> browser


