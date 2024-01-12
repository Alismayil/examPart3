import express from "express"
import mongoose from 'mongoose';
import cors from 'cors';
const { Schema } = mongoose;

const app = express()
const port = 4001

app.use(express.json())
app.use(cors())



const ExamPart3Schema = new Schema({
    image: String,
    name: String,
    comment: String
});

const Exampart3 = mongoose.model('Exampart3', ExamPart3Schema);


app.get('/product',async (req, res) => {
    const data=await Exampart3.find({})
    res.send(data)
})

app.get('/product/:id',async (req, res) => {
 try {
    const {id}=req.params
    const data=await Exampart3.findById(id).exec();
    res.status(200).send(data)
 } catch (error) {
    res.status(404).send(error)
    
 }
})

app.post('/product',async (req, res) => {
    try {
       const data=new Exampart3(req.body)
       await data.save()
       res.status(200).send("New Product created")
    } catch (error) {
       res.status(404).send("Not New Product created")
       
    }
   })

   app.delete('/product/:id',async (req, res) => {
    try {
       const {id}=req.params
       const data=await Exampart3.findByIdAndDelete(id).exec();
       res.status(200).send("Deleted Product")
    } catch (error) {
        res.status(200).send("Not Deleted Product")

       
    }
   })

mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})