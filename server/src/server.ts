import express from 'express';

import routes from './routes';

const app = express();

app.post('/users', (request, response) => {
  console.log(request.body);

  const users = [
    { name: 'Diego', age: 25 },
    { name: 'Vini', age: 21 },
  ];

  return response.json(users);
});

app.listen(3333);
