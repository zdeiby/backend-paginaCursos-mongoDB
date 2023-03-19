const store = require('./store')


function addMessage(title, slug, content, date, imagen,author, content1, image1, content2, image2, content3, image3,content4, image4, content5,image5){
    return new Promise((resolve, reject )=>{
      if(!title || !slug || !content){
          console.error('[mesageController] no hay usuario o mensaje')
          return reject('los datos son incorrectos');
          return false
      }
    const fullMessage = {
           
            title:title,
            slug:slug,
            content:content,
            date:date,
            imagen:imagen,
            author:author,
            content1:content1,
            image1:image1,
            content2:content2,
            image2:image2,
            content3:content3,
            image3:image3,
            content4:content4,
            image4:image4,
            content5:content5,
            image5:image5
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
function updateMessage(id,title, slug, content, date, imagen, author,  content1, image1, content2, image2, content3, image3,content4, image4, content5,image5){
    return new Promise(async  (resolve, reject) =>{
        if(!id ){
            reject('invalid data')
            return false;
        }
       const result = await store.updateText(id,title, slug, content, date, imagen, author,content1, image1, content2, image2, content3, image3,content4, image4, content5,image5)
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