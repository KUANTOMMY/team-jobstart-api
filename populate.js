require('dotenv').config()

const mockdata = require('./MOCK_DATA.json')
const Job = require('./models/Job')
const connectDB = require('./db/connect')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Job.create(mockdata)
    console.log('sucess!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
