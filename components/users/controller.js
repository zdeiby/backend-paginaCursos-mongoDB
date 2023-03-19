const store = require('./store')

function addMessage(name, lastName,email,password){
  return new Promise((resolve, reject )=>{
    if(!name || !email || !email || !password){
        console.error('[mesageController] no hay usuario o mensaje')
        return reject('los datos son incorrectos');
        return false
    }
    const fullMessage = {
            name: name,
            lastName: lastName,
            email:email,
            password:password,
            date: new Date(),
        }
        store.add(fullMessage)
        resolve(fullMessage)

  })
    
}

function getMessages(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(store.list(filterUser))
    })
}
function updateMessage(id,name,lastName,email,password){
    return new Promise(async  (resolve, reject) =>{
        if(!id ){
            reject('invalid data')
            return false;
        }
       const result = await store.updateText(id,name,lastName,email,password)
       resolve(result)
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            reject('ID invalido')
            return false;
        }
        store.remove(id)
        .then(()=>{ 
            resolve()
        })
        .catch(e => {
            reject(e)
        })
    })
}


module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}