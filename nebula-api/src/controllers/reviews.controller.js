const config = require('../config/config')

async function addReview (req, res) {
  const redis = req.app.get('redis')
  const knex = req.app.get('knex')

  try {
    const result = await knex('productreview').insert({
      ProductID: req.body.productid,
      ReviewerName: req.body.name,
      EmailAddress: req.body.email,
      Rating: req.body.rating,
      Comments: req.body.text
    })

    const reviewId = result[0]

    redis.sendMessage({
      qname: config.NEW_REVIEW_TOPIC,
      message: JSON.stringify(req.body),
    }, (err, resp) => {
      if (err) throw err; 
      if (resp) {
        res.json({
          success: true,
	        reviewID: reviewId
        })
        
        console.log('Message sent. ID:', resp)
      }
    });

  } catch (e) {
    console.log('Error:', e)    

    res.json({
      success: false,
      message: 'error occured'
    })
  }
}

module.exports = {
  addReview
}
