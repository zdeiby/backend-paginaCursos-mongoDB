const db = require('mongoose');
const Model=require('./model')

db.set('strictQuery', false);
db.Promise = global.Promise;

//mongodb+srv://parqueadero:1234@parqueadero.bukk0tt.mongodb.net/?retryWrites=true&w=majority
db.connect('mongodb+srv://user:2922499@cluster0.ebvthsv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});
console.log('[db] conectada con exito ');
function addMessage(message){
   // list.push(message)
   const myMessage = new Model(message);
   myMessage.save();
}
async function getMessages(filterUser){
    let filter = {};
    if(filterUser !== null){
        filter ={author: filterUser}
    }
   const messages = await Model.find(filter);
    return messages;
}

async function updateText(id,title, slug, content, date, imagen,author, content1, image1, content2, image2, content3, image3,content4, image4, content5,image5){
    const foundMessage = await Model.findOne({
        _id: id
    })
       
        foundMessage.title=title;
        foundMessage.slug=slug; 
        foundMessage.content=content; 
        foundMessage.date=date;
        foundMessage.imagen=imagen;
        foundMessage.author=author;
        foundMessage.content1=content1;
        foundMessage.image1=image1;
        foundMessage.content2=content2;
        foundMessage.image2=image2;
        foundMessage.content3=content3;
        foundMessage.image3=image3;
        foundMessage.content4=content4;
        foundMessage.image4=image4;
        foundMessage.content5=content5;
        foundMessage.image5=image5;

   const newMessage = await foundMessage.save();
   return newMessage;
}
function removeMessage(id){
    return Model.deleteOne({
        _id: id
    })
}
module.exports={
    add:addMessage,
    list: getMessages,
    updateText:updateText,
    remove:removeMessage,
    //get
    //update
    //delete
}