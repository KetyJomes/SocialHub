import express from 'express';
import routes from './routes/routes.ts';
import { listen } from 'node:quic';

const app = express();
routes(app);

const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
});


app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
