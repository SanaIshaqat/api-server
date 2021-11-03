'use strict';

const express = require('express');

const router = express.Router();

const {clothesCollection} = require('../models/index');

router.get('/clothes',getAll);
router.post('/clothes',createItem);
router.get('/clothes/:id',getOneItem);
router.put('/clothes/:id',updateItem);
router.delete('/clothes/:id',deleteItem);

async function getAll(req,res) {
    let results = await clothesCollection.read();
    res.status(200).json(results);
}

async function createItem(req,res) {
    let createNew = req.body;
    let results = await clothesCollection.create(createNew);
    res.status(201).json(results);
}
async function getOneItem(req, res) {
    const id = parseInt(req.params.id); 
    const item = await clothesCollection.read(id);
    res.status(200).json(item);
  }
  async function updateItem(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let updatedItem = await clothesCollection.update(id,obj);
    res.status(201).json(updatedItem);
  }
  
  async function deleteItem(req, res) {
    const id = parseInt(req.params.id);
    const deleteItem = await clothesCollection.delete(id);
    res.status(204).json(deleteItem);
  }

module.exports = router;


 
  
  
