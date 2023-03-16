const express = require('express')
const createController = require('./controllers/createController')
const testController = require('./controllers/testController')
const router = express.Router()

//Validator
const { body } = require('express-validator');
const { request } = require('express');
const deleteController = require('./controllers/deleteController');


router.post('/test', testController.test)
//Create Data
router.post('/mitem', [
    body('id_mitem').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('id_mitem').notEmpty(),
    body('code_mitem').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('code_mitem').notEmpty(),
    body('name_mitem').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('name_mitem').notEmpty(),
    body('code_muom').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('code_muom').notEmpty(),
    body('item_type').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('item_type').notEmpty(),
    body('comp_code').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('comp_code').notEmpty(),
], createController.mitemCreate)
router.post('/pemasukan_dokumen', createController.pemasukanDokumenCreate)
router.post('/pengeluaran_dokumen', createController.pengeluaranDokumenCreate)
router.post('/tgi', createController.pemasukanDokumenCreate)
router.post('/tgr', createController.pemasukanDokumenCreate)

//Delete Data
router.delete('/mitemdelete/:code_mitem', deleteController.mitemDelete)
router.delete('/pemasukan_dokumen/:nomoraju', deleteController.pemasukanDokumenDelete)
router.delete('/pengeluaran_dokumen/:nomoraju', deleteController.pengeluaranDokumenDelete)
router.delete('/tgi/:no', deleteController.mitemDelete)
router.delete('/tgr/:no', deleteController.mitemDelete)

module.exports = router