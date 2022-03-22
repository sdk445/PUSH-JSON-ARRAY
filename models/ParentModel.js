const mongoose = require('mongoose')

// Schema for parents
const ParentSchema = new mongoose.Schema(
    [
        {
            name: { type: String},
            child: { type: Array }
        }
    ],

) 
   
module.exports = mongoose.model('parents', ParentSchema)

