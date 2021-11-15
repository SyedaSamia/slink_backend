const express = require('express')

const router = express.Router()

const Url = require('../domain/models/model')

router.get('/:code', async (req, res) => {
    try{
        // find a document match to the code in req.params.code
        const url = await Url.findOne({
            urlId: req.params.code
        })
        if (url){
            console.log('XYZ' + url)

            return res.redirect(url.longUrl)

        }
        else {
            return res.status(404).json('No Url Found')
        }

    }
    catch (err) {
        res.status(500).json('Server Error')

    }
})

module.exports = router