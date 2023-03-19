const express = require('express');
const users = require('../components/users/network')
const articles = require('../components/articles/network')

const routes= function(server){
    server.use('/users',users)
    server.use('/articles',articles)
}
module.exports= routes;