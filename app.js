
const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.static('public'));
app.get('/reviews', (req, res) => {
  res.json(reviews);
});

app.post('/reviews', (req, res) => {
  const review = req.body;
  if (!review.product || !review.rating || !review.comment) {
    return res.status(400).json({ error: 'Invalid review' });
  }
  reviews.push(review);
  res.status(201).json(review);
});

let reviews = [
  { product: 'Product A', rating: 5, comment: 'Excellent!' },
  { product: 'Product B', rating: 4, comment: 'Very good.' },
];

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
