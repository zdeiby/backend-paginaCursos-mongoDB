const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({

        title:  String,
        slug:  String ,
        content: String ,
        date: String ,
        imagen:String,  
        author: String,
        content1:String,
        image1:String,
        content2:String,
        image2:String,
        content3:String,
        image3:String,
        content4:String,
        image4:String,
        content5:String,
        image5:String,
     
        
  /*  message:{
        type:String,
        required: true, 
        unique: true
    },*/

    
});

const model=mongoose.model('article', mySchema);
module.exports = model;