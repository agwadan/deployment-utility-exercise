const express = require('express');
const { exec } = require("child_process");
const { isValidUrl } = require('./tools');
const { stderr } = require('process');
const app = express();
const PORT = 4000;

let id = 3;

app.use(require('cors')());
app.use(express.json());

app.post('/', (req, res) => {

  const url = req.body.content;

  if (!isValidUrl(url)) {
    console.log('Invalid URL');
    return res.status(403).send('Please provide a valid URL');
  }

  exec(`kubectl create deployment dep${id} --image=${url}`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      console.log(`\n${stdout}`);
    })

  exec(`kubectl expose deployment dep${id} --type=LoadBalancer --port=8080`,
    (error, stdout, stderr) => {
      console.log(`\n\n${stdout}`);
    })

  exec(`minikube service dep${id}`, (error, stdout, stderr) => {
    console.log(`\n\n${stdout}`);
  })


  id++;
  res.status(200).send(req.body);
  console.log(req.body);
})

app.get('/', (req, res) => res.send('Deployment Utility Exercise'));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
}
module.exports = app;