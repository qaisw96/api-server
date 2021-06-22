'use strict';

const express = require('express');
const router = express.Router();

// require model DB
const foodModel = require('../models/food')
const clothesModel = require('../models/clothes')
const todoModel = require('../models/todo')

// require class pages
const ModelCollection = require('../models/data-collection-class');
const foodInstance = new ModelCollection(foodModel);
const clothesInstance = new ModelCollection(clothesModel);
const todoInstance = new ModelCollection(todoModel);
let instance;
// middleware function to check which route is requested
// And therefore make instance collection depends on req route
function checkRoute(req, res, next) {
    if(req.path === '/food') {
        console.log(req.path);
        instance = foodInstance
    } else if(req.path === '/clothes') {
        instance = clothesInstance
    } else if(req.path === '/todo') {
        instance = todoInstance
    }
    next()
}

// endpoints 
router.get('/', getAllItem);
router.get('/:id', getOneItems);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

// callback functions 
async function getAllItem(req, res) {
    let result = await instance.get()
    res.status(200).json(result)
};

async function getOneItems(req, res) {
    let id = req.params.id ;
    let result = await instance.get(id)
    res.status(200).json(result)
};

async function createItem(req, res) {
    let obj =  req.body
    let result = await instance.create(obj)
    res.status(201).json(result)
};

async function updateItem(req, res) {
    let id = req.params.id
    let obj = req.body
    let result = await instance.update(id, obj)
    res.status(200).json(result)
};

async function deleteItem(req, res) {
    let id = req.params.id;
    let result = await instance.delete(id)
    let status = result.deleted? 200 : 202
    res.status(status).json(result)
};

module.exports = {
    router,
    checkRoute
}