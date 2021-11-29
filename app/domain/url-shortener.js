const Hashids = require('hashids/cjs')
const hashids = new Hashids("this is my salt", 7, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")


function generateUrlId(){
    const urlId = hashids.encode(Date.now())
    return urlId;
}

module.exports = { generateUrlId };