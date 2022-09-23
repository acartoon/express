import express from "express";
import path from 'path';
import serverRoutes from './routes/servers.js';

const VIEW = 'view engine';
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();
import {requestTime, logger} from './middleweares.js';

app.set(VIEW, 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))


app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(requestTime);
app.use(logger);

app.use(serverRoutes);


app.get('/', (req, res) => {
    res.render('index', {active: 'main'})
})
app.get('/features', (req, res) => {
    res.render('features', {active: 'features'})
})

app.get('/download', (req, res) => {
    console.log(req.requestTime)
    res.download(path.resolve(__dirname, 'static', 'features.html'))
})

app.listen(PORT, () => {
    console.log(`port... ${PORT}`)
});