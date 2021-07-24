const express = require('express');
const app = express();
const router = express.Router();
const PORT = 4000;

app.use(require('cors'));

router.post('/', (req, res) => {
  res.send(req.body);
  console.log(req.body);
})

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));