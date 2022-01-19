const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE

mongoose.set('debug', true)


mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.j8ftn.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('connection established'))
  .catch(console.log)


  const Panda = mongoose.model('Panda', { name: String, age: Number})

  const panda = new Panda ({name: 'baris', age: 24})

  panda.save().then(() => console.log(`we have a new panda, ${panda.name}!`))