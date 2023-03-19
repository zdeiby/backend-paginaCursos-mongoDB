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
        filter ={name: filterUser}
    }
   const messages = await Model.find(filter);
    return messages;
}

async function updateText(id,name,lastName,email,password){
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.name=name;
   foundMessage.lastName=lastName;
   foundMessage.email=email;
    foundMessage.password=password;
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
}