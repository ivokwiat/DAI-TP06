import express from "express";
import cors from "cors";


const app  = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})
//
// npm run test 
//

// http://localhost:3000/ejemplo-query?nombre=polshu&edad=50
app.get('/ejemplo-query', (req, res) => {
  res.send(req.query);
})

// http://localhost:3000/ejemplo-params/21
app.get('/ejemplo-params/:id', (req, res) => {
  res.send('id: ' + req.params.id)
})

// http://localhost:3000/ejemplo-error
app.get('/ejemplo-error', (req, res) => {
  let a = 1/0;
  b=0;
  res.send(req.query);
})

// http://localhost:3000/ejemplo-res-status200
app.get('/ejemplo-res-status200', (req, res) => {
  res.status(200).send('Todo OK!');
})

// http://localhost:3000/ejemplo-res-status404
app.get('/ejemplo-res-status404', (req, res) => {
  res.status(404).send('No se encontro!!');
})


// http://localhost:3000/ejemplo-res-json
app.get('/ejemplo-res-json', (req, res) => {
  let objetoResponse = {
                  nombre : 'Elvis',
                  edad  : 50,
                  casado : true
              }
  res.send(objetoResponse);
})

// http://localhost:3000/ejemplo-req-json
app.post('/ejemplo-req-json', (req, res) => {
  let objetoRecibido = req.body;
  console.log('/ejemplo-req-json');
  console.log(req);
  console.log(req.body);
  res.send(objetoRecibido);
})


/*
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  */
//app.METHOD(PATH, HANDLER)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})