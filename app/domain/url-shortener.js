const Hashids = require('hashids/cjs')
const hashids = new Hashids("das ist mein salz", 7)


function generateUrlId(){
    const urlId = hashids.encode(Date.now())
    return urlId;
}

module.exports = { generateUrlId };