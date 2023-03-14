require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dns = require('dns');
const URL = require('url').URL;
const { createUrl, findUrlByShortUrl, hashUrl, isValidUrl } = require('./urlController');


app.set('view engine', 'pug');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl', (req, res) => {
  const url = req.body.url;

  if (!isValidUrl(url)) {
    return res.json({ error: 'invalid url' });
  }

  const hostname = new URL(url).hostname;

  dns.lookup(hostname, (err, address) => {

    if (err) {
      return res.json({ error: 'invalid url' });
    }

    createUrl(url, (err, data) => {
      if (err) {
        return console.error(err);
      }

      const shortUrl = `${process.env.HOST}/${data.shortUrl}`;

      res.render('shortened', { originalUrl: url, shortUrl });
    });
  });
});

app.get('/:shortUrl', (req, res) => {
  findUrlByShortUrl(req.params.shortUrl, (err, url) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }

    if (!url) return res.sendStatus(404);

    res.redirect(url.originalUrl);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
