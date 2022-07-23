const express = require('express');
const path = require('path');
const api = require('/routes/apiRoutes');
const public = require('/routes/htmlRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api',api);




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);