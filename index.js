const express = require('express');
	  const app = express();

app.use('/dist', express.static('dist'));
app.use('/src/assets', express.static('src/assets'));
app.use((req, res, next) => res.sendFile(__dirname + '/index.html'));

app.listen(3000, () => console.log('app listening on port 3000'));