import express from 'express';
import 'dotenv/config';
import logger from 'morgan';
import accountRouter from './routes/accounts/accountRouters';

const port = process.env.PORT || 3000

const app = express()

app.use(logger('combined'))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/account', accountRouter)


app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})

