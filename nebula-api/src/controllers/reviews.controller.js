async function addReview (req, res) {
  const redis = req.app.get('redis')
  const knex = req.app.get('knex')

  const sampleReview = {
    name: 'Elvis Presley',
		email: 'theking@elvismansion.com',
		productid: '87823',
    text: 'Best product',
    rating: '5'
  }

  try {
    const result = await knex('productreview').insert({
      ProductID: sampleReview.productid,
      ReviewerName: sampleReview.name,
      EmailAddress: sampleReview.email,
      Rating: sampleReview.rating,
      Comments: sampleReview.text
    })

    const reviewId = result[0]

    redis.sendMessage({
      qname: 'reviews-queue',
      message: JSON.stringify(sampleReview),
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
