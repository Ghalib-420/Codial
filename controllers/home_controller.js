module.exports.home = function (req, res) {
  return res.end(`<p>Express is running since </p>`);
};

module.exports.fun = function (req, res) {
  setInterval(() => {
    let date = new Date();
    return res.end(`<h1>${date}</h1>`);
  }, 1000);
};
