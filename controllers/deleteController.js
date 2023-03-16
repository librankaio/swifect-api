const { mitem, pemasukan_dokumen, pengeluaran_dokumen, tgi, tgr } = require('../models')

module.exports = {
    mitemDelete: async (req, res) => {
        const code_mitem = req.params.code_mitem;
        try {
            const data = await mitem.destroy({
                where: {
                    code_mitem: code_mitem
                }
            })

            return res.json({
                message: "Data berhasil di hapus",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                message: "Fatal Error!"
            })
        }
    },
    pemasukanDokumenDelete: async (req, res) => {
        const nomoraju = req.params.nomoraju;
        try {
            const data = await pemasukan_dokumen.destroy({
                where: {
                    nomoraju: nomoraju
                }
            })

            return res.json({
                message: "Data berhasil di hapus",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                message: "Fatal Error!"
            })
        }
    },
    pengeluaranDokumenDelete: async (req, res) => {
        const nomoraju = req.params.nomoraju;
        try {
            const data = await pengeluaran_dokumen.destroy({
                where: {
                    nomoraju: nomoraju
                }
            })

            return res.json({
                message: "Data berhasil di hapus",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                message: "Fatal Error!"
            })
        }
    },
    tgiDelete: async (req, res) => {
        const no = req.params.no;
        try {
            const data = await tgi.destroy({
                where: {
                    no: no
                }
            })

            return res.json({
                message: "Data berhasil di hapus",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                message: "Fatal Error!"
            })
        }
    },
    tgrDelete: async (req, res) => {
        const no = req.params.no;
        try {
            const data = await tgr.destroy({
                where: {
                    no: no
                }
            })

            return res.json({
                message: "Data berhasil di hapus",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                message: "Fatal Error!"
            })
        }
    },
}