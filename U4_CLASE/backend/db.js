const mongoose = require('mongoose');

const conectar = () => {
    mongoose.connect('mongodb+srv://cxpractica:g5uaB6CI7eklTwEL@cluster0.rjf5sm6.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {console.log('MONGODB conectado.')})
      .catch((error) => {console.log( `[error] - ${error}` )})
}

module.exports = conectar