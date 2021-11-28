const express = require('express')

//url validator
const validUrl = require('valid-url')

//express route handler creation
const router = express.Router()

//import the Slink Database Model
const Url = require('../domain/models/model')

//to generate shorturl id
//const shortid = require('shortid')
const shortIdByHashid = require('../domain/url-shortener')

const baseUrl = 'https://slnk-app.herokuapp.com'



router.post('/shorten', async(req, res) => {


    // destructure the longUrl from req.body.longUrl
    const {
        longUrl
    } = req.body

    // check the validity of baseUrl using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }

    // if valid, create the urlId
    const urlId = shortIdByHashid.generateUrlId()


    // check the validity of long url
    if(validUrl.isUri(longUrl)) {
        console.log('Posting shorturl to db')
        try {

            // check whether the longUrl is already stored in database
            let url = await Url.findOne({
                longUrl
            })


            // if longUrl already exists then return the response,
            // also count the entry of that url
            if(url) {
                url.longUrlEntryCount++
                await url.save()
                res.json(url)
            }
            else {

                // create the short url
                const shortUrl = baseUrl + '/' + urlId

                // invoking the Url model (from model.js) and saving to the DB
                url = new Url({
                    urlId,
                    longUrl,
                    shortUrl
                })
                await url.save()
                res.json(url)

            }
        }
        catch (err) {
            console.log(res)
            res.status(500).json('Server Error')
        }

    } else {
        res.status(401).json('Invalid LongUrl')
        res.send(error.message);

    }

})

module.exports = router