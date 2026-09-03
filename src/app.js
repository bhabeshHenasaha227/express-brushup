import express from 'express';
const app = express();
const port = 3000;



app.get('/test', (req, res) => {
  res.send('Hello World! test ');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// app.use('/test', (req, res) => {
//   res.send('Hello World! test ');
// });
// app.use('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});