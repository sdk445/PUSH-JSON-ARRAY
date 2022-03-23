const mongoose = require('mongoose')
const Schema = mongoose;


// Schema for parents
const ParentSchema = new mongoose.Schema({
    name:String,
    child:[Object]
}
    
   

)
//export parent schema
module.exports = mongoose.model('parents', ParentSchema)
