'use strict';

const express = require('express');

const router = express.Router();

const {foodCollection} = require('../models/index');

router.get('/food',getAll);
router.post('/food',createItem);
router.get('/food/:id',getOneItem);
router.put('/food/:id',updateItem);
router.delete('/food/:id',deleteItem);

async function getAll(req,res) {
    let results = await foodCollection.read();
    res.status(200).json(results);
}

async function createItem(req,res) {
    let createNew = req.body;
    let results = await foodCollection.create(createNew);
    res.status(201).json(results);
}
async function getOneItem(req, res) {
    const id = parseInt(req.params.id);
    const item = await foodCollection.read(id);
    res.status(200).json(item);
  }
  async function updateItem(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let updatedItem = await foodCollection.update(id,obj);
    res.status(201).json(updatedItem);
  }

   
  async function deleteItem(req, res) {
    const id = parseInt(req.params.id);
    const deleteItem = await foodCollection.delete(id);
    res.status(204).json(deleteItem);
  }

module.exports = router;
