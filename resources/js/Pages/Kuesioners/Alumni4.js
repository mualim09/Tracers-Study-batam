import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni4(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        d1: dataKuesioner.d1 || '',
        d2: dataKuesioner.d2 || '',
        d3: dataKuesioner.d3 || '',
        d4: dataKuesioner.d4 || '',
        d5: dataKuesioner.d5 || '',
        d6: dataKuesioner.d6 || '',
        d7: dataKuesioner.d7 || '',
        d8: dataKuesioner.d8 || '',
        d9: dataKuesioner.d9 || '',
        d10: dataKuesioner.d10 || '',
        d11: dataKuesioner.d11 || '',
        d12: dataKuesioner.d12 || '',
        d13: dataKuesioner.d13 || '',
        d14: dataKuesioner.d14 || '',
        d15: dataKuesioner.d15 || '',
        d16: dataKuesioner.d16 || '',
        d17: dataKuesioner.d17 || '',
        d18: dataKuesioner.d18 || '',
        d19: dataKuesioner.d19 || '',
        d20: dataKuesioner.d20 || '',
        d21: dataKuesioner.d21 || '',
        d22: dataKuesioner.d22 || '',
        d23: dataKuesioner.d23 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update4', dataKuesioner.id))
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Lulusan yang bekerja</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d1">
                                        Nama perusahaan tempat Anda bekerja? 
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='d1' value={data.d1} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d1}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d2">
                                        Dimana provinsi perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d2' onChange={handleChange} value={data.d2}>
                                        <option>-- Pilih Provinsi --</option>
                                        <option onClick={(e)=>setShow(true)}>Aceh</option> <option onClick={(e)=>setShow(true)}>Sumatera Utara</option> <option onClick={(e)=>setShow(true)}>Sumatera Barat</option> <option onClick={(e)=>setShow(true)}>Riau</option> <option onClick={(e)=>setShow(true)}>Jambi</option> <option onClick={(e)=>setShow(true)}>Sumatera Selatan</option> <option onClick={(e)=>setShow(true)}>Bengkulu</option> <option onClick={(e)=>setShow(true)}>Lampung</option> <option onClick={(e)=>setShow(true)}>Bangka Belitung</option>
                                        <option onClick={(e)=>setShow(true)}>Kepulauan Riau</option> <option onClick={(e)=>setShow(true)}>DKI Jakarta</option> <option onClick={(e)=>setShow(true)}>Jawa Barat</option> <option onClick={(e)=>setShow(true)}>Jawa Tengah</option> <option onClick={(e)=>setShow(true)}>DI Yogyakarta</option> <option onClick={(e)=>setShow(true)}>Jawa Timur</option> <option onClick={(e)=>setShow(true)}>Banten</option> <option onClick={(e)=>setShow(true)}>Bali</option> <option onClick={(e)=>setShow(true)}>Nusa Tenggara Barat</option> <option onClick={(e)=>setShow(true)}>Nusa Tenggara Timur</option>
                                        <option onClick={(e)=>setShow(true)}>Kalimantan Barat</option> <option onClick={(e)=>setShow(true)}>Kalimantan Tengah</option> <option onClick={(e)=>setShow(true)}>Kalimantan Selatan</option> <option onClick={(e)=>setShow(true)}>Kalimantan Timur</option> <option onClick={(e)=>setShow(true)}>Kalimantan Utara</option> <option onClick={(e)=>setShow(true)}>Sulawesi Utara</option> <option onClick={(e)=>setShow(true)}>Sulawesi Tengah</option> <option onClick={(e)=>setShow(true)}>Sulawesi Selatan</option> <option onClick={(e)=>setShow(true)}>Sulawesi Tenggara</option>
                                        <option onClick={(e)=>setShow(true)}>Gorontalo</option> <option onClick={(e)=>setShow(true)}>Sulawesi Barat</option> <option onClick={(e)=>setShow(true)}>Maluku</option> <option onClick={(e)=>setShow(true)}>Maluku Utara</option> <option onClick={(e)=>setShow(true)}>Papua</option> <option onClick={(e)=>setShow(true)}>Papua Barat</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d2}</div>}
                                </div>
                                {show && data.d2 == 'Aceh' || data.d2 == 'Aceh' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Banda Aceh</option>
                                        <option>Langsa</option>
                                        <option>Sabang</option>
                                        <option>Subulussalam</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Sumatera Utara' || data.d2 == 'Sumatera Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
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
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Sumatera Barat' || data.d2 == 'Sumatera Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bukittinggi</option>
                                        <option>Padang</option>
                                        <option>Padang Panjang</option>
                                        <option>Pariaman</option>
                                        <option>Payakumbuh</option>
                                        <option>Sawahlunto</option>
                                        <option>Solok</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Riau' || data.d2 == 'Riau' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Dumai</option>
                                        <option>Pekanbaru</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Jambi' || data.d2 == 'Jambi' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Sungai Penuh</option>
                                        <option>Jambi</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Sumatera Selatan' || data.d2 == 'Sumatera Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Lubuklinggau</option>
                                        <option>Pagar Alam</option>
                                        <option>Palembang</option>
                                        <option>Prabumulih</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''} 
                                {show && data.d2 == 'Bengkulu' || data.d2 == 'Bengkulu' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bengkulu</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Lampung' || data.d2 == 'Lampung' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bandar Lampung</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Bangka Belitung' || data.d2 == 'Bangka Belitung' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Pangkalpinang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Kepulauan Riau' || data.d2 == 'Kepulauan Riau' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Batam</option>
                                        <option>Tanjungpinang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'DKI Jakarta' || data.d2 == 'DKI Jakarta' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Jakarta Barat</option>
                                        <option>Jakarta Pusat</option>
                                        <option>Jakarta Selatan</option>
                                        <option>Jakarta Timur</option>
                                        <option>Jakarta Utara</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Jawa Barat' || data.d2 == 'Jawa Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
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
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Jawa Tengah' || data.d2 == 'Jawa Tengah' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Magelang</option>
                                        <option>Pekalongan</option>
                                        <option>Salatiga</option>
                                        <option>Semarang</option>
                                        <option>Surakarta</option>
                                        <option>Tegal</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'DI Yogyakarta' || data.d2 == 'DI Yogyakarta' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Yogyakarta</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Jawa Timur' || data.d2 == 'Jawa Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
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
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Banten' || data.d2 == 'Banten' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Cilegon</option>
                                        <option>Serang</option>
                                        <option>Tangerang Selatan</option>
                                        <option>Tangerang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Bali' || data.d2 == 'Bali' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Denpasar</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Nusa Tenggara Barat' || data.d2 == 'Nusa Tenggara Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bima</option>
                                        <option>Mataram</option>
                                        <option>Kupang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Nusa Tenggara Timur' || data.d2 == 'Nusa Tenggara Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Kupang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Kalimantan Barat' || data.d2 == 'Kalimantan Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Pontianak</option>
                                        <option>Singkawang</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Kalimantan Selatan' || data.d2 == 'Kalimantan Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Banjarbaru</option>
                                        <option>Banjarmasin</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Kalimantan Timur' || data.d2 == 'Kalimantan Timur' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Balikpapan</option>
                                        <option>Bontang</option>
                                        <option>Samarinda</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Kalimantan Utara' || data.d2 == 'Kalimantan Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Tarakan</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Sulawesi Utara' || data.d2 == 'Sulawesi Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Bitung</option>
                                        <option>Kotamobagu</option>
                                        <option>Manado</option>
                                        <option>Tomohon</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Sulawesi Tengah' || data.d2 == 'Sulawesi Tengah' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Palu</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Sulawesi Selatan' || data.d2 == 'Sulawesi Selatan' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Makassar</option>
                                        <option>Palopo</option>
                                        <option>Parepare</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Sulawesi Tenggara' || data.d2 == 'Sulawesi Tenggara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Baubau</option>
                                        <option>Kendari</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Gorontalo' || data.d2 == 'Gorontalo' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Gorontalo</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Sulawesi Barat' || data.d2 == 'Sulawesi Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Mamuju</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Maluku' || data.d2 == 'Maluku' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Ambon</option>
                                        <option>Tual</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Maluku Utara' || data.d2 == 'Maluku Utara' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Ternate</option>
                                        <option>Tidore Kepulauan</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Papua' || data.d2 == 'Papua' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Jayapura</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                {show && data.d2 == 'Papua Barat' || data.d2 == 'Papua Barat' ? (<div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d3">
                                        Dimana kota perusahaan tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d3' onChange={handleChange} value={data.d3}>
                                        <option>-- Pilih Kota --</option>
                                        <option>Sorong</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d3}</div>}
                                </div>) : ''}
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d4">
                                        Alamat perusahaan tempat anda bekerja?
                                    </label>
                                    <textarea className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='d4' value={data.d4} onChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d4}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d5">
                                        Email perusahaan tempat Anda bekerja?
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='d5' value={data.d5} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d5}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d6">
                                        Apa lapangan usaha/bidang pekerjaan di tempat Anda bekerja?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d6' onChange={handleChange} value={data.d6}>
                                        <option>-- Pilih KBLI --</option>
                                        <option>Agrikultur</option> <option>Pertambangan dan Penggalian</option> <option>Manufaktur</option> <option>Konstruksi</option> 
                                        <option>Perdagangan</option> <option>Restoran</option> <option>Perhotelan</option> <option>Transportasi</option> <option>Logistik</option> <option>Komunikasi</option>
                                        <option>Keuangan dan Asuransi</option> <option>Jasa</option> <option>Pendidikan</option> <option>Pariwisata</option> <option onClick={(e)=>setShow(true)}>Lainnya</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d6}</div>}
                                    {show && data.d6 == "Lainnya" || data.d6 == 'Lainnya' ? (
                                        <div>
                                            <Input className='w-full lg:w-96' type='text' name='d7' value={data.d7} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.d7}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d8">
                                        Apa jenis/bidang pekerjaan saat ini?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='d8' onChange={handleChange} value={data.d8}>
                                        <option>-- Pilih KBLI --</option>
                                        <option>Teknik Informatika</option> <option>Teknik Geomatika</option> <option>Animasi</option> <option>Teknik Multimedia dan Jaringan</option> <option>Rekayasa Keamanan Siber</option> <option>Rekayasa Perangkat Lunak</option>
                                        <option>Akuntansi</option> <option>Akuntansi Manajerial</option> <option>Administrasi Bisnis Terapan</option> <option>Logistik Perdagangan Internasional</option> <option>Teknik Elektronika Manufaktur</option> <option>Teknik Elektronika</option>
                                        <option>Teknik Instrumentasi</option> <option>Teknik Mekatronika</option> <option>Teknologi Rekayasa Pembangkit Energi</option> <option>Teknik Robotika</option> <option>Teknik Mesin</option> <option>Teknik Perawatan Pesawat Udara</option>
                                        <option>Teknik Perencanaan dan Konstruksi Kapal</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d8}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d9">
                                        Berapa jumlah karyawan/buruh yang dibayar di instansi/lembaga/perusahaan/tempat Anda bekerja?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d9}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang dari 20 orang" name="d9" checked={data.d9 === 'Kurang dari 20 orang' && true} /> <span className='text-sm text-gray-700'>Kurang dari 20 orang</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="20 s.d 99 orang" name="d9" checked={data.d9 === '20 s.d 99 orang' && true} /> <span className='text-sm text-gray-700'>20 s.d 99 orang</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lebih dari 100 orang" name="d9" checked={data.d9 === 'Lebih dari 100 orang' && true} /> <span className='text-sm text-gray-700'>Lebih dari 100 orang</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak tahu" name="d9" checked={data.d9 === 'Tidak tahu' && true} /> <span className='text-sm text-gray-700'>Tidak tahu</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d9}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d10">
                                        Apa jenis instansi/lembaga/perusahaan/tempat Anda bekerja?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d10}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Instansi pemerintah" name="d10" checked={data.d10 === 'Instansi pemerintah' && true} /> <span className='text-sm text-gray-700'>Instansi pemerintah</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lembaga internasional" name="d10" checked={data.d10 === 'Lembaga internasional' && true} /> <span className='text-sm text-gray-700'>Lembaga internasional</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lembaga Non-profit (contoh: yayasan/LSM)" name="d10" checked={data.d10 === 'Lembaga Non-profit (contoh: yayasan/LSM)' && true} /> <span className='text-sm text-gray-700'>Lembaga Non-profit (contoh: yayasan/LSM)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lembaga profit (contoh: perusahan swasta/BUMN/BUMD)" name="d10" checked={data.d10 === 'Lembaga profit (contoh: perusahan swasta/BUMN/BUMD)' && true} /> <span className='text-sm text-gray-700'>Lembaga profit (contoh: perusahan swasta/BUMN/BUMD)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Koperasi" name="d10" checked={data.d10 === 'Koperasi' && true} /> <span className='text-sm text-gray-700'>Koperasi</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Usaha perorangan/rumah tangga (contoh: toko sembako)" name="d10" checked={data.d10 === 'Usaha perorangan/rumah tangga (contoh: toko sembako)' && true} /> <span className='text-sm text-gray-700'>Usaha perorangan/rumah tangga (contoh: toko sembako)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Rumah tangga (contoh: pembantu rumah tangga, sopir rumah tangga)" name="d10" checked={data.d10 === 'Rumah tangga (contoh: pembantu rumah tangga, sopir rumah tangga)' && true} /> <span className='text-sm text-gray-700'>Rumah tangga (contoh: pembantu rumah tangga, sopir rumah tangga)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak tahu" name="d10" checked={data.d10 === 'Tidak tahu' && true} /> <span className='text-sm text-gray-700'>Tidak tahu</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="d10" checked={data.d10 === 'Lainnya' && true} onClick={(e)=>setShow(true)}/> <span className='text-sm text-gray-700'>Lainnya</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d10}</div>}
                                    {show && data.d10 == "Lainnya" || data.d10 == 'Lainnya' ? (
                                        <div>
                                            <Input className='w-full lg:w-96' type='text' name='d11' value={data.d11} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.d11}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d12">
                                        Kapan anda mulai bekerja di pekerjaan sekarang? (Bulan, Tahun)
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='d12' value={data.d12} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d12}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d13">
                                        Kira-kira kapan Anda memperoleh pekerjaan pertama?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d13}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="6 Bulan sebelum lulus" name="d13" checked={data.d13 === '6 Bulan sebelum lulus' && true} /> <span className='text-sm text-gray-700'>6 Bulan sebelum lulus</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3 Bulan sebelum lulus" name="d13" checked={data.d13 === '3 Bulan sebelum lulus' && true} /> <span className='text-sm text-gray-700'>3 Bulan sebelum lulus</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1 Bulan sebelum lulus" name="d13" checked={data.d13 === '1 Bulan sebelum lulus' && true} /> <span className='text-sm text-gray-700'>1 Bulan sebelum lulus</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1 Bulan sesudah lulus" name="d13" checked={data.d13 === '1 Bulan sesudah lulus' && true} /> <span className='text-sm text-gray-700'>1 Bulan sesudah lulus</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3 Bulan sesudah lulus" name="d13" checked={data.d13 === '3 Bulan sesudah lulus' && true} /> <span className='text-sm text-gray-700'>3 Bulan sesudah lulus</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="6 Bulan sesudah lulus" name="d13" checked={data.d13 === '6 Bulan sesudah lulus' && true} /> <span className='text-sm text-gray-700'>6 Bulan sesudah lulus</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="d13" checked={data.d13 === 'Lainnya' && true} onClick={(e)=>setShow(true)}/> <span className='text-sm text-gray-700'>Lainnya</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d13}</div>}
                                    {show && data.d13 == "Lainnya" || data.d13 == 'Lainnya' ? (
                                        <div>
                                            <Input className='w-full lg:w-96' type='text' name='d14' value={data.d14} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.d14}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d15">
                                        Level pekerjaan?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d15}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Owner" name="d15" checked={data.d15 === 'Owner' && true} /> <span className='text-sm text-gray-700'>Owner</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Direktur" name="d15" checked={data.d15 === 'Direktur' && true} /> <span className='text-sm text-gray-700'>Direktur</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Manager" name="d15" checked={data.d15 === 'Manager' && true} /> <span className='text-sm text-gray-700'>Manager</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Supervisor" name="d15" checked={data.d15 === 'Supervisor' && true} /> <span className='text-sm text-gray-700'>Supervisor</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Staf (Teknisi/Officer)" name="d15" checked={data.d15 === 'Staf (Teknisi/Officer)' && true} /> <span className='text-sm text-gray-700'>Staf (Teknisi/Officer)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Entry" name="d15" checked={data.d15 === 'Entry' && true} /> <span className='text-sm text-gray-700'>Entry</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="d15" checked={data.d15 === 'Lainnya' && true} onClick={(e)=>setShow(true)}/> <span className='text-sm text-gray-700'>Lainnya</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d15}</div>}
                                    {show && data.d15 == "Lainnya" || data.d15 == 'Lainnya' ? (
                                        <div>
                                            <Input className='w-full lg:w-96' type='text' name='d16' value={data.d16} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.d16}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d17">
                                        Kesesuaian antara bidang studi dengan pekerjaan
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d17}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat Sesuai" name="d17" checked={data.d17 === 'Sangat Sesuai' && true} /> <span className='text-sm text-gray-700'>Sangat Sesuai</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sesuai" name="d17" checked={data.d17 === 'Sesuai' && true} /> <span className='text-sm text-gray-700'>Sesuai</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup Sesuai" name="d17" checked={data.d17 === 'Cukup Sesuai' && true} /> <span className='text-sm text-gray-700'>Cukup Sesuai</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Kurang Sesuai" name="d17" checked={data.d17 === 'Kurang Sesuai' && true} /> <span className='text-sm text-gray-700'>Kurang Sesuai</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Sesuai" name="d17" checked={data.d17 === 'Tidak Sesuai' && true} /> <span className='text-sm text-gray-700'>Tidak Sesuai</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d17}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d18">
                                        Tingkat pendidikan yang paling tepat/sesuai untuk pekerjaan Anda
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d18}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Setingkat Lebih Tinggi" name="d18" checked={data.d18 === 'Setingkat Lebih Tinggi' && true} /> <span className='text-sm text-gray-700'>Setingkat Lebih Tinggi</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tingkat yang Sama" name="d18" checked={data.d18 === 'Tingkat yang Sama' && true} /> <span className='text-sm text-gray-700'>Tingkat yang Sama</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Setingkat Lebih Rendah" name="d18" checked={data.d18 === 'Setingkat Lebih Rendah' && true} /> <span className='text-sm text-gray-700'>Setingkat Lebih Rendah</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Perlu Pendidikan Tinggi" name="d18" checked={data.d18 === 'Tidak Perlu Pendidikan Tinggi' && true} /> <span className='text-sm text-gray-700'>Tidak Perlu Pendidikan Tinggi</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d18}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d19">
                                        Berapa gaji/upah Anda dalam sebulan?
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='d19' value={data.d19} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d19}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d20">
                                        Dimana lokasi instansi/lembaga/perusahaan/tempat Anda bekerja?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d20}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Dalam Negeri" name="d20" checked={data.d20 === 'Dalam Negeri' && true} /> <span className='text-sm text-gray-700'>Dalam Negeri</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Luar Negeri" name="d20" checked={data.d20 === 'Luar Negeri' && true} /> <span className='text-sm text-gray-700'>Luar Negeri</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d20}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d21">
                                        Berapa kali Anda pernah bekerja (termasuk pekerjaan sekarang) sejak Anda lulus dari satuan pendidikan?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d21}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Satu kali" name="d21" checked={data.d21 === 'Satu kali' && true} /> <span className='text-sm text-gray-700'>Satu kali</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Dua kali" name="d21" checked={data.d21 === 'Dua kali' && true} /> <span className='text-sm text-gray-700'>Dua kali</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tiga kali" name="d21" checked={data.d21 === 'Tiga kali' && true} /> <span className='text-sm text-gray-700'>Tiga kali</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lebih dari 3 kali" name="d21" checked={data.d21 === 'Lebih dari 3 kali' && true} /> <span className='text-sm text-gray-700'>Lebih dari 3 kali</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d21}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="d22">
                                        Bagaimana cara Anda mendapatkan pekerjaan pertama?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.d22}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui industri yang menjadi mitra satuan pendidikan" name="d22" checked={data.d22 === 'Melalui industri yang menjadi mitra satuan pendidikan' && true} /> <span className='text-sm text-gray-700'>Melalui industri yang menjadi mitra satuan pendidikan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui layanan pusat karir/bursa kerja di satuan pendidikan" name="d22" checked={data.d22 === 'Melalui layanan pusat karir/bursa kerja di satuan pendidikan' && true} /> <span className='text-sm text-gray-700'>Melalui layanan pusat karir/bursa kerja di satuan pendidikan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui ikatan alumni" name="d22" checked={data.d22 === 'Melalui ikatan alumni' && true} /> <span className='text-sm text-gray-700'>Melalui ikatan alumni</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui tempat magang selama studi" name="d22" checked={data.d22 === 'Melalui tempat magang selama studi' && true} /> <span className='text-sm text-gray-700'>Melalui tempat magang selama studi</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui iklan di media cetak" name="d22" checked={data.d22 === 'Melalui iklan di media cetak' && true} /> <span className='text-sm text-gray-700'>Melalui iklan di media cetak</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui iklan di media online" name="d22" checked={data.d22 === 'Melalui iklan di media online' && true} /> <span className='text-sm text-gray-700'>Melalui iklan di media online</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui bursa kerja/pameran kerja" name="d22" checked={data.d22 === 'Melalui bursa kerja/pameran kerja' && true} /> <span className='text-sm text-gray-700'>Melalui bursa kerja/pameran kerja</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melamar langsung ke tempat bekerja" name="d22" checked={data.d22 === 'Melamar langsung ke tempat bekerja' && true} /> <span className='text-sm text-gray-700'>Melamar langsung ke tempat bekerja</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui staf pengajar di satuan pendidikan" name="d22" checked={data.d22 === 'Melalui staf pengajar di satuan pendidikan' && true} /> <span className='text-sm text-gray-700'>Melalui staf pengajar di satuan pendidikan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melalui bantuan orang tua/famili/teman" name="d22" checked={data.d22 === 'Melalui bantuan orang tua/famili/teman' && true} /> <span className='text-sm text-gray-700'>Melalui bantuan orang tua/famili/teman</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="d22" checked={data.d22 === 'Lainnya' && true} onClick={(e)=>setShow(true)}/> <span className='text-sm text-gray-700'>Lainnya</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.d22}</div>}
                                    {show && data.d22 == "Lainnya" || data.d22 == 'Lainnya' ? (
                                        <div>
                                            <Input className='w-full lg:w-96' type='text' name='d23' value={data.d23} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.d23}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit3', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className="grid justify-end">
                                            <Button>
                                                <span>Save</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </Button>
                                        </div>
                                    </div>
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
