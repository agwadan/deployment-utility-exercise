const express = require('express');
const { exec } = require('child_process');
const { isValidUrl } = require('./tools');
const app = express();
const PORT = 4000;

app.use(require('cors')());
app.use(express.json());

const genName = (length) => {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

app.post('/', (req, res) => {

  const url = req.body.content;
  const depName = genName(10);

  if (!isValidUrl(url)) {
    console.log('Invalid URL');
    return res.status(403).send('Please provide a valid URL');
  }

  exec(`kubectl create deployment ${depName} --image=${url}`,
    (error, stdout, stderr) => {
      console.log(`\n${stdout}`);
    })

  exec(`kubectl expose deployment ${depName} --type=LoadBalancer --port=8080`,
    (error, stdout, stderr) => {
      console.log(`\n\n${stdout}`);
    })

  exec(`minikube service ${depName}`, (error, stdout, stderr) => {
    console.log(`\n\n${stdout}`);
  })

  res.status(200).send(req.body);
  console.log(req.body);
})

app.get('/', (req, res) => res.send('Deployment Utility Exercise'));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
}
module.exports = app;