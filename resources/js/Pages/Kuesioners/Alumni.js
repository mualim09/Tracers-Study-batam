import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni(props) {
    const { auth } = usePage().props
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        a1: dataKuesioner.a1 || auth.user.name || '',
        a2: dataKuesioner.a2 || '',
        a3: dataKuesioner.a3 || auth.user.identifier || '',
        a4: dataKuesioner.a4 || '',
        a5: dataKuesioner.a5 || auth.user.prodi || '',
        a6: dataKuesioner.a6 || '',
        a7: dataKuesioner.a7 || auth.user.kelamin || '',
        a8: dataKuesioner.a8 || '',
        a9: dataKuesioner.a9 || '',
        a10: dataKuesioner.a10 || '',
        a11: dataKuesioner.a11 || auth.user.email || '',
        a12: dataKuesioner.a12 || auth.user.telp || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update', dataKuesioner.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    const [show, setShow] = useState(false)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                        <span>Kuesioner</span>
                    </h2>}
        >
            <Head title="Kuesioner" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <form onSubmit={updateHandler}>
                                <div className="mb-6">
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Data umum responden</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a1">
                                        Nama
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a1' value={data.a1} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a1}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a2">
                                        Nomor Induk Kependudukan (NIK)
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a2' value={data.a2} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a2}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a3">
                                        Nomor Induk Mahasiswa (NIM)
                                    </label>
                                    <input className='w-full lg:w-96 bg-gray-100/50 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' disabled type='text' name='a3' value={data.a3} onChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a3}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a4">
                                        Tahun lulus
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a4' value={data.a4} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a4}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a5">
                                        Prodi
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a5' onChange={handleChange} value={data.a5}>
                                        <option>-- Pilih Prodi --</option>
                                        <option>Teknik Informatika</option> <option>Teknik Geomatika</option> <option>Animasi</option> <option>Teknik Multimedia dan Jaringan</option> <option>Rekayasa Keamanan Siber</option> <option>Rekayasa Perangkat Lunak</option>
                                        <option>Akuntansi</option> <option>Akuntansi Manajerial</option> <option>Administrasi Bisnis Terapan</option> <option>Logistik Perdagangan Internasional</option> <option>Teknik Elektronika Manufaktur</option> <option>Teknik Elektronika</option>
                                        <option>Teknik Instrumentasi</option> <option>Teknik Mekatronika</option> <option>Teknologi Rekayasa Pembangkit Energi</option> <option>Teknik Robotika</option> <option>Teknik Mesin</option> <option>Teknik Perawatan Pesawat Udara</option>
                                        <option>Teknik Perencanaan dan Konstruksi Kapal</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a5}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a6">
                                        Usia (tahun)
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a6' value={data.a6} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a6}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a7">
                                        Jenis kelamin
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.a7}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Laki-laki" name="a7" checked={data.a7 === 'Laki-laki' && true} /> <span className='block text-gray-700 text-sm text-md tracking-tight font-sans'>Laki-Laki</span>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Perempuan" name="a7" checked={data.a7 === 'Perempuan' && true} /> <span className='block text-gray-700 text-sm text-md tracking-tight font-sans'>Perempuan</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a7}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a8">
                                        Provinsi tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a8' onChange={handleChange} value={data.a8}>
                                        <option>-- Pilih Provinsi --</option>
                                        <option onClick={(e)=>setShow(true)}>Aceh</option> <option onClick={(e)=>setShow(true)}>Sumatera Utara</option> <option onClick={(e)=>setShow(true)}>Sumatera Barat</option> <option onClick={(e)=>setShow(true)}>Riau</option> <option onClick={(e)=>setShow(true)}>Jambi</option> <option onClick={(e)=>setShow(true)}>Sumatera Selatan</option> <option onClick={(e)=>setShow(true)}>Bengkulu</option> <option onClick={(e)=>setShow(true)}>Lampung</option> <option onClick={(e)=>setShow(true)}>Bangka Belitung</option>
                                        <option onClick={(e)=>setShow(true)}>Kepulauan Riau</option> <option onClick={(e)=>setShow(true)}>DKI Jakarta</option> <option onClick={(e)=>setShow(true)}>Jawa Barat</option> <option onClick={(e)=>setShow(true)}>Jawa Tengah</option> <option onClick={(e)=>setShow(true)}>DI Yogyakarta</option> <option onClick={(e)=>setShow(true)}>Jawa Timur</option> <option onClick={(e)=>setShow(true)}>Banten</option> <option onClick={(e)=>setShow(true)}>Bali</option> <option onClick={(e)=>setShow(true)}>Nusa Tenggara Barat</option> <option onClick={(e)=>setShow(true)}>Nusa Tenggara Timur</option>
                                        <option onClick={(e)=>setShow(true)}>Kalimantan Barat</option> <option onClick={(e)=>setShow(true)}>Kalimantan Tengah</option> <option onClick={(e)=>setShow(true)}>Kalimantan Selatan</option> <option onClick={(e)=>setShow(true)}>Kalimantan Timur</option> <option onClick={(e)=>setShow(true)}>Kalimantan Utara</option> <option onClick={(e)=>setShow(true)}>Sulawesi Utara</option> <option onClick={(e)=>setShow(true)}>Sulawesi Tengah</option> <option onClick={(e)=>setShow(true)}>Sulawesi Selatan</option> <option onClick={(e)=>setShow(true)}>Sulawesi Tenggara</option>
                                        <option onClick={(e)=>setShow(true)}>Gorontalo</option> <option onClick={(e)=>setShow(true)}>Sulawesi Barat</option> <option onClick={(e)=>setShow(true)}>Maluku</option> <option onClick={(e)=>setShow(true)}>Maluku Utara</option> <option onClick={(e)=>setShow(true)}>Papua</option> <option onClick={(e)=>setShow(true)}>Papua Barat</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a8}</div>}
                                </div>
                                {show && data.a8 == 'Aceh' || data.a8 == 'Aceh' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Banda Aceh</option>
                                        <option>Langsa</option>
                                        <option>Sabang</option>
                                        <option>Subulussalam</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Sumatera Utara' || data.a8 == 'Sumatera Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Binjai</option>
                                        <option>Gunungsitoli</option>
                                        <option>Medan</option>
                                        <option>Padang Sidempuan</option>
                                        <option>Pematangsiantar</option>
                                        <option>Sibolga</option>
                                        <option>Tanjungbalai</option>
                                        <option>Tebing Tinggi</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Sumatera Barat' || data.a8 == 'Sumatera Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bukittinggi</option>
                                        <option>Padang</option>
                                        <option>Padang Panjang</option>
                                        <option>Pariaman</option>
                                        <option>Payakumbuh</option>
                                        <option>Sawahlunto</option>
                                        <option>Solok</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Riau' || data.a8 == 'Riau' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Dumai</option>
                                        <option>Pekanbaru</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Jambi' || data.a8 == 'Jambi' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Sungai Penuh</option>
                                        <option>Jambi</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Sumatera Selatan' || data.a8 == 'Sumatera Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Lubuklinggau</option>
                                        <option>Pagar Alam</option>
                                        <option>Palembang</option>
                                        <option>Prabumulih</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''} 
                                {show && data.a8 == 'Bengkulu' || data.a8 == 'Bengkulu' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bengkulu</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Lampung' || data.a8 == 'Lampung' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bandar Lampung</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Bangka Belitung' || data.a8 == 'Bangka Belitung' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Pangkalpinang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Kepulauan Riau' || data.a8 == 'Kepulauan Riau' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Batam</option>
                                        <option>Tanjungpinang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'DKI Jakarta' || data.a8 == 'DKI Jakarta' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Jakarta Barat</option>
                                        <option>Jakarta Pusat</option>
                                        <option>Jakarta Selatan</option>
                                        <option>Jakarta Timur</option>
                                        <option>Jakarta Utara</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Jawa Barat' || data.a8 == 'Jawa Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bandung</option>
                                        <option>Bekasi</option>
                                        <option>Bogor</option>
                                        <option>Cimahi</option>
                                        <option>Cirebon</option>
                                        <option>Sukabumi</option>
                                        <option>Tasikmalaya</option>
                                        <option>Banjar</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Jawa Tengah' || data.a8 == 'Jawa Tengah' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Magelang</option>
                                        <option>Pekalongan</option>
                                        <option>Salatiga</option>
                                        <option>Semarang</option>
                                        <option>Surakarta</option>
                                        <option>Tegal</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'DI Yogyakarta' || data.a8 == 'DI Yogyakarta' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Yogyakarta</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Jawa Timur' || data.a8 == 'Jawa Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Batu</option>
                                        <option>Blitar</option>
                                        <option>Kediri</option>
                                        <option>Madiun</option>
                                        <option>Malang</option>
                                        <option>Mojokerto</option>
                                        <option>Pasuruan</option>
                                        <option>Probolinggo</option>
                                        <option>Surabaya</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Banten' || data.a8 == 'Banten' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Cilegon</option>
                                        <option>Serang</option>
                                        <option>Tangerang Selatan</option>
                                        <option>Tangerang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Bali' || data.a8 == 'Bali' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Denpasar</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Nusa Tenggara Barat' || data.a8 == 'Nusa Tenggara Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bima</option>
                                        <option>Mataram</option>
                                        <option>Kupang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Nusa Tenggara Timur' || data.a8 == 'Nusa Tenggara Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Kupang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Kalimantan Barat' || data.a8 == 'Kalimantan Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Pontianak</option>
                                        <option>Singkawang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Kalimantan Selatan' || data.a8 == 'Kalimantan Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Banjarbaru</option>
                                        <option>Banjarmasin</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Kalimantan Timur' || data.a8 == 'Kalimantan Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Balikpapan</option>
                                        <option>Bontang</option>
                                        <option>Samarinda</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Kalimantan Utara' || data.a8 == 'Kalimantan Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Tarakan</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Sulawesi Utara' || data.a8 == 'Sulawesi Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bitung</option>
                                        <option>Kotamobagu</option>
                                        <option>Manado</option>
                                        <option>Tomohon</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Sulawesi Tengah' || data.a8 == 'Sulawesi Tengah' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Palu</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Sulawesi Selatan' || data.a8 == 'Sulawesi Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Makassar</option>
                                        <option>Palopo</option>
                                        <option>Parepare</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Sulawesi Tenggara' || data.a8 == 'Sulawesi Tenggara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Baubau</option>
                                        <option>Kendari</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Gorontalo' || data.a8 == 'Gorontalo' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Gorontalo</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Sulawesi Barat' || data.a8 == 'Sulawesi Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Mamuju</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Maluku' || data.a8 == 'Maluku' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Ambon</option>
                                        <option>Tual</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Maluku Utara' || data.a8 == 'Maluku Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Ternate</option>
                                        <option>Tidore Kepulauan</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Papua' || data.a8 == 'Papua' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Jayapura</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                {show && data.a8 == 'Papua Barat' || data.a8 == 'Papua Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a9">
                                        Kota tempat tinggal sekarang
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='a9' onChange={handleChange} value={data.a9}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Sorong</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a9}</div>}
                                </div>) : ''}
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a10">
                                        Alamat
                                    </label>
                                    <textarea className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='a10' value={data.a10} onChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a10}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a11">
                                        Email
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a11' value={data.a11} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a11}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a12">
                                        No.HP/WA yang aktif
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a12' value={data.a12} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a12}</div>}
                                </div>
                                <hr />
                                <div className='grid justify-end mt-5'>
                                    <Button>
                                        <span>Save</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
