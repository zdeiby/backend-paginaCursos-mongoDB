const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({

        name:  String,
        lastName:  String ,
        password: String ,
        email: {
            type: String,
            required: true,
            unique: true
          },
  /*  message:{
        type:String,
        required: true,
    },*/

    date: Date,
});

const model=mongoose.model('Message', mySchema);
module.exports = model;