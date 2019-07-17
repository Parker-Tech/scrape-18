var axios = require("axios")
var cheerio = require("cheerio")

var scrape = function() {
  return axios.get("http://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data)
    var articles = []
  })

  $(".assetWrapper").each(function(i, element) {
    var head = $(this).find("h2").text().trim()
    var url = $(this).find("a").attr("href")
    var sum = $(this).find("p").text().trim()
    
  })
}