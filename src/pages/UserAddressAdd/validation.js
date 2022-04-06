const rules = {
    nama_alamat: {
        required: {value: true, message: 'Nama alamat tidak boleh kosong.'},
        maxlength: {value: 500, message: 'panjang nama lengkap maksimal 500 karakter'},
        minLength:{value: 5, message: 'Panjang nama alamat minimal 5 karakter'}
    },

    provinsi: {
        required: {value: true, message: 'Provinsi harus di isi'}
    },

    kabupaten: {
        required: {value: true, message: 'Kabupaten harus di isi'}
    },

    kecamatan: {
        required: {value: true, message: 'Kecamatan harus di isi'}
    },

    kelurahan: {
        required: {value: true, message: 'Kelurahan harus di isi'}
    },
    detail_alamat: {
        required: {value: true, message: 'Detail alamat harus di isi'},
        maxlength: {value: 1000, message: 'panjang nama lengkap maksimal 1000 karakter'}
        
    },
}

export {rules};