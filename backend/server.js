const express = require('express');
const { isValidUrl } = require('./tools');
const app = express();
const PORT = 4000;

app.use(require('cors')());
app.use(express.json());

app.post('/', (req, res) => {
  if (!isValidUrl(req.body.content)) {
    console.log('error');
    return res.status(403).send('Please provide a valid url');
  }
  res.send(req.body);
  console.log(req.body);
})

app.get('/', (req, res) => res.send('Deployment Utility Exercise'));
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));