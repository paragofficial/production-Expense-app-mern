const express = require('express');
const { addTransaction, getAllTransaction, editTransaction ,deleteTransaction} = require('../controllers/transactionCtrl');



const router = express.Router();


router.post('/add-transactions', addTransaction)

router.post('/edit-transactions', editTransaction)

router.post('/delete-transactions', deleteTransaction)

router.post('/get-transaction', getAllTransaction)

module.exports = router;