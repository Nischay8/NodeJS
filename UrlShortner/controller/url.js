const { nanoid } = require("nanoid");

const urls = require("../models/url");

async function handelGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url)
    return res.status(400).json({
      error: "Url is Required",
    });
  const shortId = nanoid(8);
  await urls.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
}

module.exports = {
  handelGenerateNewShortUrl,
};
