import express from 'express';
<<<<<<< HEAD
import cors from "cors";


const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}))
=======
import routes from './routes/routes.ts';

const app = express();
routes(app);

>>>>>>> 9dfd2de04dbdd52a4887836697f14579db6de850
const port = 8080;

// app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
});


app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
