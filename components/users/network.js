const express = require('express');
const response= require('../../network/response');
const controller = require('./controller')
const router= express.Router();

router.get('/', function(req,res){
    const filterMessages = req.query.email || null;
   controller.getMessages(filterMessages)
   .then((messageList)=>{
    response.success(res,res, messageList, 200)
   })
   .catch(e => {
    response.error(req,res, 'Unexpected Error', 500, e);
   })
})

router.post('/', function(req,res){
    controller.addMessage(req.body.name,req.body.lastName,req.body.email,req.body.password)
        .then((fullMessage)=>{    
            response.success(req,res,fullMessage,201);
        })
        .catch(e => {
            response.error(req,res, 'inf invalida', 400, 'error en el controlador')
        })
})
router.patch('/:id',function(req, res){
 
    controller.updateMessage(req.params.id, req.body.name,req.body.lastName,req.body.email,req.body.password)
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
