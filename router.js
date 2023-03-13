const express = require('express')
const createController = require('./controllers/createController')
const testController = require('./controllers/testController')
const router = express.Router()


router.post('/test', testController.test)

router.post('/mitem', createController.mitemCreate)
router.post('/pemasukan_dokumen', createController.pemasukanDokumenCreate)
router.post('/pengeluaran_dokumen', createController.pengeluaranDokumenCreate)
router.post('/tgi', createController.pemasukanDokumenCreate)
router.post('/tgr', createController.pemasukanDokumenCreate)


module.exports = router