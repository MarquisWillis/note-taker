const express = require('express');
const apiRoute = require('./routes/apiRoutes.js');
const htmlRoute = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);