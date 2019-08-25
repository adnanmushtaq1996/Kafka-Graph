module.exports = function (app, io) {
  app.post('/stream', function (req, res) {
    console.log("streaming to browser", req.body);
    io.sockets.emit(req.body);   //this will send the data to browser
    res.json({ result: "update sent over IO" }); //success response to consumer
  });
}