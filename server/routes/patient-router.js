import express from 'express'

// const  PatientController = require('../controllers/patient-controller');
// import {PatientController} from '../controllers/patient-controller';
import {getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem} from '../controllers/patient-controller.js';

export const router = express.Router();

router.get('/items',  getItems);
router.get('/item/:id',  getItemById);
router.post('/item',  createItem);
router.put('/item/:id',  updateItem);
router.delete('/item/:id',  deleteItem);

// module.exports = router;
