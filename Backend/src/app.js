import express from 'express';
import aiRoute from './routes/ai.route.js'
import cors from 'cors'

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.send('Home route');
})



app.use('/ai', aiRoute);

export default app;
