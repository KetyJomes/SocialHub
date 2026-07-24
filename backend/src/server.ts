import express from 'express';
import cors from "cors";


const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}))
const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
});


app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
