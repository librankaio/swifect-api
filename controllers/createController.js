const { mitem, pemasukan_dokumen, pengeluaran_dokumen, tgi, tgr } = require('../models')
const { body, validationResult } = require('express-validator');

module.exports = {
    mitemCreate: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: "Periksa kembali data anda!" });
            }
            const data = await mitem.create({
                id_mitem: req.body.id_mitem,
                code_mitem: req.body.code_mitem,
                name_mitem: req.body.name_mitem,
                code_muom: req.body.code_muom,
                item_type: req.body.item_type,
                comp_code: req.body.comp_code,
                dptanggal: req.body.dptanggal,
                bpbtanggal: req.body.bpbtanggal,
                note: req.body.note,
            });

            return res.json({
                status: "success",
                message: "Data berhasil di kirimkan",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                errors: errors.array(),
                status: "error",
                message: "Periksa kembali data anda!"
            }, 400)
        }
    },
    pemasukanDokumenCreate: async (req, res) => {
        // const data = await pemasukan_dokumen.create({
        //     jenis_dokumen: req.body.jenis_dokumen,
        //     nomoraju: req.body.nomoraju,
        //     dpnomor: req.body.dpnomor,
        //     dptanggal: req.body.dptanggal,
        //     bpbnomor: req.body.bpbnomor,
        //     bpbtanggal: req.body.bpbtanggal,
        //     pemasok_pengirim: req.body.pemasok_pengirim,
        //     kode_barang: req.body.kode_barang,
        //     nama_barang: req.body.nama_barang,
        //     sat: req.body.sat,
        //     jumlah: req.body.jumlah,
        //     nilai_barang: req.body.nilai_barang,
        //     nilai_barang_usd: req.body.nilai_barang_usd,
        //     comp_code: req.body.comp_code,
        //     note: req.body.note,
        //     matauang: req.body.matauang,
        // });

        // return res.json({
        //     message: "Data berhasil di kirimkan",
        //     data: data
        // }, 200)
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: "Periksa kembali data anda!" });
            }
            const data = await pemasukan_dokumen.create({
                jenis_dokumen: req.body.jenis_dokumen,
                nomoraju: req.body.nomoraju,
                dpnomor: req.body.dpnomor,
                dptanggal: req.body.dptanggal,
                bpbnomor: req.body.bpbnomor,
                bpbtanggal: req.body.bpbtanggal,
                pemasok_pengirim: req.body.pemasok_pengirim,
                kode_barang: req.body.kode_barang,
                nama_barang: req.body.nama_barang,
                sat: req.body.sat,
                jumlah: req.body.jumlah,
                nilai_barang: req.body.nilai_barang,
                nilai_barang_usd: req.body.nilai_barang_usd,
                comp_code: req.body.comp_code,
                note: req.body.note,
                matauang: req.body.matauang,
            });

            return res.json({
                status: "success",
                message: "Data berhasil di kirimkan",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                errors: errors.array(),
                status: "error",
                message: "Periksa kembali data anda!"
            }, 400)
        }
    },
    pengeluaranDokumenCreate: async (req, res) => {
        // const data = await pengeluaran_dokumen.create({
        //     jenis_dokumen: req.body.jenis_dokumen,
        //     nomoraju: req.body.nomoraju,
        //     dpnomor: req.body.dpnomor,
        //     dptanggal: req.body.dptanggal,
        //     bpbnomor: req.body.bpbnomor,
        //     bpbtanggal: req.body.bpbtanggal,
        //     pembeli_penerima: req.body.pembeli_penerima,
        //     kode_barang: req.body.kode_barang,
        //     nama_barang: req.body.nama_barang,
        //     sat: req.body.sat,
        //     jumlah: req.body.jumlah,
        //     nilai_barang: req.body.nilai_barang,
        //     nilai_barang_usd: req.body.nilai_barang_usd,
        //     comp_code: req.body.comp_code,
        //     note: req.body.note,
        //     matauang: req.body.matauang,
        // });

        // return res.json({
        //     message: "Data berhasil di kirimkan",
        //     data: data
        // }, 200)
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: "Periksa kembali data anda!" });
            }
            const data = await pengeluaran_dokumen.create({
                jenis_dokumen: req.body.jenis_dokumen,
                nomoraju: req.body.nomoraju,
                dpnomor: req.body.dpnomor,
                dptanggal: req.body.dptanggal,
                bpbnomor: req.body.bpbnomor,
                bpbtanggal: req.body.bpbtanggal,
                pembeli_penerima: req.body.pembeli_penerima,
                kode_barang: req.body.kode_barang,
                nama_barang: req.body.nama_barang,
                sat: req.body.sat,
                jumlah: req.body.jumlah,
                nilai_barang: req.body.nilai_barang,
                nilai_barang_usd: req.body.nilai_barang_usd,
                comp_code: req.body.comp_code,
                note: req.body.note,
                matauang: req.body.matauang,
            });

            return res.json({
                status: "success",
                message: "Data berhasil di kirimkan",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                errors: errors.array(),
                status: "error",
                message: "Periksa kembali data anda!"
            }, 400)
        }
    },
    tgiCreate: async (req, res) => {
        // const data = await tgi.create({
        //     no: req.body.no,
        //     tdate: req.body.tdate,
        //     id_mitem: req.body.id_mitem,
        //     code_mitem: req.body.code_mitem,
        //     name_mitem: req.body.name_mitem,
        //     id_muom: req.body.id_muom,
        //     code_muom: req.body.code_muom,
        //     qty: req.body.qty,
        //     id_mwhse: req.body.id_mwhse,
        //     code_mwhse: req.body.code_mwhse,
        //     comp_code: req.body.comp_code,
        //     item_type: req.body.item_type,
        //     note: req.body.note,
        //     wip: req.body.wip,
        // });

        // return res.json({
        //     message: "Data berhasil di kirimkan",
        //     data: data
        // }, 200)
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: "Periksa kembali data anda!" });
            }
            const data = await tgi.create({
                no: req.body.no,
                tdate: req.body.tdate,
                id_mitem: req.body.id_mitem,
                code_mitem: req.body.code_mitem,
                name_mitem: req.body.name_mitem,
                id_muom: req.body.id_muom,
                code_muom: req.body.code_muom,
                qty: req.body.qty,
                id_mwhse: req.body.id_mwhse,
                code_mwhse: req.body.code_mwhse,
                comp_code: req.body.comp_code,
                item_type: req.body.item_type,
                note: req.body.note,
                wip: req.body.wip,
            });

            return res.json({
                status: "success",
                message: "Data berhasil di kirimkan",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                status: "error",
                message: "Periksa kembali data anda!"
            }, 400)
        }
    },
    tgrCreate: async (req, res) => {
        // const data = await tgr.create({
        //     no: req.body.no,
        //     tdate: req.body.tdate,
        //     id_mitem: req.body.id_mitem,
        //     code_mitem: req.body.code_mitem,
        //     name_mitem: req.body.name_mitem,
        //     id_muom: req.body.id_muom,
        //     code_muom: req.body.code_muom,
        //     qty: req.body.qty,
        //     id_mwhse: req.body.id_mwhse,
        //     code_mwhse: req.body.code_mwhse,
        //     comp_code: req.body.comp_code,
        //     item_type: req.body.item_type,
        //     note: req.body.note,
        //     wip: req.body.wip,
        // });

        // return res.json({
        //     message: "Data berhasil di kirimkan",
        //     data: data
        // }, 200)
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: "Periksa kembali data anda!" });
            }
            const data = await tgr.create({
                no: req.body.no,
                tdate: req.body.tdate,
                id_mitem: req.body.id_mitem,
                code_mitem: req.body.code_mitem,
                name_mitem: req.body.name_mitem,
                id_muom: req.body.id_muom,
                code_muom: req.body.code_muom,
                qty: req.body.qty,
                id_mwhse: req.body.id_mwhse,
                code_mwhse: req.body.code_mwhse,
                comp_code: req.body.comp_code,
                item_type: req.body.item_type,
                note: req.body.note,
                wip: req.body.wip,
            });
            return res.json({
                status: "success",
                message: "Data berhasil di kirimkan",
                data: data
            }, 200)
        } catch (error) {
            return res.json({
                errors: errors.array(),
                status: "error",
                message: "Periksa kembali data anda!"
            }, 400)
        }
    },
}