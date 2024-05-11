import express, {Request, Response} from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'


mongoose.connect(process.env.MONGODB_URI as string).then(()=> {
    console.log('Connected to DB')
})

const app = express()

app.use(express.json())
app.use(cors())

app.get('/test', async(req: Request, res: Response) => {
    res.json({message: 'Helllo'})
})

app.listen(3000, () => {
    console.log('Server is running on localhost:3000')
})