import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser';
import route from './router/userRoute.js'

const app=express();

app.use(cors({origin:"*"}))
app.use(bodyParser.json());

app.use('',route);

export default app;