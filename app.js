const express = require('express');
const app = express();
const port = process.env.PORT || 4000;



app.get('/', (req, res) => {
      res.send('Hello my heroku website');
});

app.listen(port, () => {
      console.log(`App listening on port ${port}!`);
});