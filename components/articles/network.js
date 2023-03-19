const express = require('express');
const response= require('../../network/response');
const controller = require('./controller')
const router= express.Router();

router.get('/', function(req,res){
    const filterMessages = req.query.author || null;
   controller.getMessages(filterMessages)
   .then((messageList)=>{
    response.success(res,res, messageList, 200)
   })
   .catch(e => {
    response.error(req,res, 'Unexpected Error', 500, e);
   })
})

router.post('/', function(req,res){
    controller.addMessage(req.body.title, req.body.slug,req.body.content, req.body.date, req.body.imagen, req.body.author, req.body.content1, req.body.image1, req.body.content2, req.body.image2, req.body.content3, req.body.image3,req.body.content4, req.body.image4, req.body.content5,req.body.image5)
        .then((fullMessage)=>{    
            response.success(req,res,fullMessage,201);
        })
        .catch(e => {
            response.error(req,res, 'inf invalida', 400, 'error en el controlador')
        })
})
router.patch('/:id',function(req, res){
 
    controller.updateMessage(req.params.id,req.body.title, req.body.slug,req.body.content, req.body.date, req.body.imagen,  req.body.author,req.body.content1, req.body.image1, req.body.content2, req.body.image2, req.body.content3, req.body.image3,req.body.content4, req.body.image4, req.body.content5,req.body.image5)
    .then((data)=>{
        response.success(req,res,data,200);
    })
    .catch(e => {
        response.error(req, res, 'error interno', 500, e)
    })
  
})

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
    .then(() =>{
        response.success(req, res, `Usuario ${req.params.id} eliminado` , 200)
    })
    .catch ( e=> {
        response.error(req,res, 'error interno', 500, e);
    })
})

module.exports = router;
