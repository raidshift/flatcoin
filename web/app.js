const express = require('express')

const app = express();
const port = 4000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/nft', (req, res) => {
  res.sendFile(__dirname + '/nft/index.html')
});

app.listen(port, () => {
  console.log(`flatcoin listening on port ${port}!`)
});