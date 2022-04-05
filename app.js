const express=require('express')
const port=3000;
const app=express();
const db=require('./db')

app.use(express.json());

const verify=require('./routes/logincheck')
app.use('/logincheck',verify)

const register=require('./routes/signup')
app.use('/signup',register)


app.listen(port,()=>{
    console.log(`Server listening at ${port}`)
}
)