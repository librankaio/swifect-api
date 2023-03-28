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
router.post('/pemasukan_dokumen', [
    body('jenis_dokumen').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('jenis_dokumen').notEmpty(),
    body('nomoraju').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('nomoraju').notEmpty(),
    body('dpnomor').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('dpnomor').notEmpty(),
    body('dptanggal').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('dptanggal').notEmpty(),
    body('bpbnomor').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('bpbnomor').notEmpty(),
    body('bpbtanggal').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('bpbtanggal').notEmpty(),
    body('pemasok_pengirim').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('pemasok_pengirim').notEmpty(),
    body('kode_barang').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('kode_barang').notEmpty(),
    body('nama_barang').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('nama_barang').notEmpty(),
    body('sat').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('sat').notEmpty(),
    body('jumlah').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('jumlah').notEmpty(),
    body('nilai_barang').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('nilai_barang').notEmpty(),
    body('nilai_barang_usd').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('nilai_barang_usd').notEmpty(),
    body('comp_code').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('comp_code').notEmpty(),
    body('note').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('note').notEmpty(),
    body('matauang').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('matauang').notEmpty(),
], createController.pemasukanDokumenCreate)
router.post('/pengeluaran_dokumen', [
    body('jenis_dokumen').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('jenis_dokumen').notEmpty(),
    body('nomoraju').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('nomoraju').notEmpty(),
    body('dpnomor').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('dpnomor').notEmpty(),
    body('dptanggal').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('dptanggal').notEmpty(),
    body('bpbnomor').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('bpbnomor').notEmpty(),
    body('bpbtanggal').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('bpbtanggal').notEmpty(),
    body('pembeli_penerima').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('pemasok_pengirim').notEmpty(),
    body('kode_barang').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('kode_barang').notEmpty(),
    body('nama_barang').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('nama_barang').notEmpty(),
    body('sat').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('sat').notEmpty(),
    body('jumlah').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('jumlah').notEmpty(),
    body('nilai_barang').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('nilai_barang').notEmpty(),
    body('nilai_barang_usd').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('nilai_barang_usd').notEmpty(),
    body('comp_code').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('comp_code').notEmpty(),
    body('note').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('note').notEmpty(),
    body('matauang').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('matauang').notEmpty(),
], createController.pengeluaranDokumenCreate)
router.post('/tgi', [
    body('no').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('no').notEmpty(),
    body('tdate').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('tdate').notEmpty(),
    body('id_mitem').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('id_mitem').notEmpty(),
    body('code_mitem').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('code_mitem').notEmpty(),
    body('name_mitem').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('name_mitem').notEmpty(),
    body('id_muom').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('id_muom').notEmpty(),
    body('code_muom').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('code_muom').notEmpty(),
    body('qty').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('qty').notEmpty(),
    body('id_mwhse').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('id_mwhse').notEmpty(),
    body('code_mwhse').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('code_mwhse').notEmpty(),
    body('comp_code').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('comp_code').notEmpty(),
    body('item_type').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('item_type').notEmpty(),
    body('note').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('note').notEmpty(),
    body('wip').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('wip').notEmpty(),
], createController.tgiCreate)
router.post('/tgr', [
    body('no').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('no').notEmpty(),
    body('tdate').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('tdate').notEmpty(),
    body('id_mitem').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('id_mitem').notEmpty(),
    body('code_mitem').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('code_mitem').notEmpty(),
    body('name_mitem').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('name_mitem').notEmpty(),
    body('id_muom').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('id_muom').notEmpty(),
    body('code_muom').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('code_muom').notEmpty(),
    body('qty').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('qty').notEmpty(),
    body('id_mwhse').trim().optional({ checkFalsy: true }).isNumeric().withMessage('Only Number are Allowed'), body('id_mwhse').notEmpty(),
    body('code_mwhse').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('code_mwhse').notEmpty(),
    body('comp_code').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('comp_code').notEmpty(),
    body('item_type').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('item_type').notEmpty(),
    body('note').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('note').notEmpty(),
    body('wip').trim().optional({ checkFalsy: true }).isString().withMessage('Only String are Allowed'), body('wip').notEmpty(),
], createController.tgrCreate)

//Delete Data
router.delete('/mitemdelete/:code_mitem', deleteController.mitemDelete)
router.delete('/pemasukan_dokumendelete/:nomoraju', deleteController.pemasukanDokumenDelete)
router.delete('/pengeluaran_dokumendelete/:nomoraju', deleteController.pengeluaranDokumenDelete)
router.delete('/tgidelete/:no', deleteController.tgiDelete)
router.delete('/tgrdelete/:no', deleteController.tgrDelete)

module.exports = router