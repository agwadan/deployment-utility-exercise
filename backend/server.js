const app = require('express')();
const PORT = 4000;

app.use(require('cors'));
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));