const express = require('express')

const router = express.Router()

const Url = require('../domain/models/model')

router.get('/:code', async (req, res) => {
    try{
        // find a document match to the code in req.params.code
        const url = await Url.findOne({
            urlId: req.params.code
        })
        console.log("XYZ" + url)
        if (url){
            // count the visit of that shortUrl
            url.shortUrlRedirCount++
            await url.save()
            res.redirect(url.longUrl)

        }
        else {
            res.status(404).json('No Url Found!')
        }

    }
    catch (err) {
        res.status(500).json('Server Error!')
        res.send(error.message);

    }
})

module.exports = router