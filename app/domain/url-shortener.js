const Hashids = require('hashids/cjs')
const hashids = new Hashids("das ist mein salz", 7)


function generateUrlId(){
    const urlId = hashids.encode(Date.now)
    console.log(urlId)

    return urlId;
}

module.exports = { generateUrlId };