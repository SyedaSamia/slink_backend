const express = require('express')

const router = express.Router()

const Url = require('../domain/models/model')

// const app = express()

// app.use('/*', router)

router.get('/:shortUrlId', async (req, res) => {
    console.log("XYZ1" )
    try{
        // find a document match to the code in req.params.code
        console.log("XYZ2" + url)
        const url = await Url.findOne({
            urlId: req.params.code
        })
        console.log("XYZ3" + url)
        if (url){
            // count the visit of that shortUrl
            url.shortUrlRedirCount++
            await url.save()
            return res.redirect(url.longUrl)
        }
        else {
            console.log("XYZ4" + url)
            return res.status(404).json('No Url Found!')
        }

    }
    catch (err) {
        console.log("XYZ5" + url)
        res.status(500).json('Server Error!')
        res.send(error.message);

    }
})

module.exports = router