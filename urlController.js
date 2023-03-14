const Url = require('./url')
const crypto = require('crypto');
const URL = require('url').URL;

const createUrl = (originalUrl, done) => {
  const url = new Url({
    originalUrl,
    shortUrl: hashUrl(originalUrl)
  });

  url.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
}

const findUrlByShortUrl = (shortUrl, done) => {
  Url.findOne({ shortUrl: shortUrl }, (err, url) => {
    if (err) console.error(err);
    done(null, url);
  })
}

const hashUrl = (url) => {
  const hashedUrl = crypto.createHash('sha256')
    .update(url)
    .digest('hex')
    .substr(0, 6);

  return hashedUrl;
}

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  createUrl,
  findUrlByShortUrl,
  hashUrl,
  isValidUrl
};