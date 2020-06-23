//declare express js modul
const express = require('express')
require('dotenv').config();
require('./models/db');

const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 3000

//Router

const adminRouter = require('./routes/admin.route')
const testRouter = require('./routes/test.route')
const categoryRouter = require('./routes/category.route')

app.get('/', (req, res) => res.send('Hello World!'))




app.use('/admin', adminRouter);
app.use('/category', categoryRouter);
app.use('/test', testRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))