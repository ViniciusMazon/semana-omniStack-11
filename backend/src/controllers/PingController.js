class Ping {
  index(req, res) {
    res.send('pong');
  }
}

module.exports = new Ping();
