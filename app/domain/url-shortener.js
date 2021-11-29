const Hashids = require('hashids/cjs')
const hashids = new Hashids("this is my salt", 7, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")


function generateUrlId(){
    const urlId = hashids.encode(parseInt(Date.now()/1000))
    return urlId;
}

module.exports = { generateUrlId };