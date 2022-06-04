import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni7(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        h1: dataKuesioner.h1 || '',
        h2: dataKuesioner.h2 || '',
        h3: dataKuesioner.h3 || '',
        h4: dataKuesioner.h4 || '',
        h5: dataKuesioner.h5 || '',
        h6: dataKuesioner.h6 || '',
        h7: dataKuesioner.h7 || '',
        h8: dataKuesioner.h8 || '',
        h9: dataKuesioner.h9 || '',
        h10: dataKuesioner.h10 || '',
        h11: dataKuesioner.h11 || '',
        h12: dataKuesioner.h12 || '',
        h13: dataKuesioner.h13 || '',
        h14: dataKuesioner.h14 || '',
        h15: dataKuesioner.h15 || '',
        h16: dataKuesioner.h16 || '',
        h17: dataKuesioner.h17 || '',
        h18: dataKuesioner.h18 || '',
        h19: dataKuesioner.h19 || '',
        h20: dataKuesioner.h20 || '',
        h21: dataKuesioner.h21 || '',
        h22: dataKuesioner.h22 || '',
        h23: dataKuesioner.h23 || '',
        h24: dataKuesioner.h24 || '',
        h25: dataKuesioner.h25 || '',
        h26: dataKuesioner.h26 || '',
        h27: dataKuesioner.h27 || '',
        h28: dataKuesioner.h28 || '',
        h29: dataKuesioner.h29 || '',
        h30: dataKuesioner.h30 || '',
        h31: dataKuesioner.h31 || '',
        h32: dataKuesioner.h32 || '',
        h33: dataKuesioner.h33 || '',
        h34: dataKuesioner.h34 || '',
        h35: dataKuesioner.h35 || '',
        h36: dataKuesioner.h36 || '',
        h37: dataKuesioner.h37 || '',
        h38: dataKuesioner.h38 || '',
        h39: dataKuesioner.h39 || '',
        h40: dataKuesioner.h40 || '',
        h41: dataKuesioner.h41 || '',
        h42: dataKuesioner.h42 || '',
        h43: dataKuesioner.h43 || '',
        h44: dataKuesioner.h44 || '',
        h45: dataKuesioner.h45 || '',
        h46: dataKuesioner.h46 || '',
        h47: dataKuesioner.h47 || '',
        h48: dataKuesioner.h48 || '',
        h49: dataKuesioner.h49 || '',
        h50: dataKuesioner.h50 || '',
        h51: dataKuesioner.h51 || '',
        h52: dataKuesioner.h52 || '',
        h53: dataKuesioner.h53 || '',
        h54: dataKuesioner.h54 || '',
        h55: dataKuesioner.h55 || '',
        h56: dataKuesioner.h56 || '',
        h57: dataKuesioner.h57 || '',
        h58: dataKuesioner.h58 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update7', dataKuesioner.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
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
                                    <h1 className='text-2xl mb-3 font-semibold'>Umpan balik dari lulusan</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h1">
                                        Apa alasan Anda memilih pendidikan Vokasi? (boleh lebih dari satu jawaban)
                                    </label>
                                    <label className="block text-gray-500 text-sm mb-2">
                                        (Pendidikan vokasi mencakup SMK, pendidikan tinggi vokasi/politeknik, kursus dan pelatihan)
                                    </label>
                                    <div className='block items-center gap-x-4'>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h1" onChange={e => setData('h1', e.target.checked)} defaultChecked={data.h1 == '1' && true}/> <span className='text-sm text-gray-700'>Ingin cepat mendapatkan pekerjaan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h2" onChange={e => setData('h2', e.target.checked)} defaultChecked={data.h2 == '1' && true}/> <span className='text-sm text-gray-700'>Keterbatasan ekonomi</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h3" onChange={e => setData('h3', e.target.checked)} defaultChecked={data.h3 == '1' && true}/> <span className='text-sm text-gray-700'>Biaya lebih terjangkau</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h4" onChange={e => setData('h4', e.target.checked)} defaultChecked={data.h4 == '1' && true}/> <span className='text-sm text-gray-700'>Pilihan sendiri</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h5" onChange={e => setData('h5', e.target.checked)} defaultChecked={data.h5 == '1' && true}/> <span className='text-sm text-gray-700'>Diajak teman</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h6" onChange={e => setData('h6', e.target.checked)} defaultChecked={data.h6 == '1' && true}/> <span className='text-sm text-gray-700'>Keinginan orang tua</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h7" onChange={e => setData('h7', e.target.checked)} defaultChecked={data.h7 == '1' && true}/> <span className='text-sm text-gray-700'>Tidak diterima di sekolah lain</span></div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Seberapa penting kemampuan berikut ini dibutuhkan di instansi/lembaga/perusahaan/tempat Anda bekerja/berwirausaha?
                                    </label>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h8">
                                            Kemampuan menggunakan peralatan teknologi informasi
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h8}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h8" checked={data.h8 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h8" checked={data.h8 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h8" checked={data.h8 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h8" checked={data.h8 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h8" checked={data.h8 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h8}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h9">
                                            Kemampuan berbahasa asing
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h9}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h9" checked={data.h9 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h9" checked={data.h9 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h9" checked={data.h9 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h9" checked={data.h9 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h9" checked={data.h9 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h9}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h10">
                                            Kemampuan menyampaikan ide dan solusi
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h10}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h10" checked={data.h10 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h10" checked={data.h10 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h10" checked={data.h10 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h10" checked={data.h10 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h10" checked={data.h10 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h10}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h11">
                                            Kemampuan untuk beradaptasi dengan lingkungan kerja
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h11}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h11" checked={data.h11 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h11" checked={data.h11 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h11" checked={data.h11 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h11" checked={data.h11 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h11" checked={data.h11 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h11}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h12">
                                            Berpikir analitis
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h12}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h12" checked={data.h12 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h12" checked={data.h12 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h12" checked={data.h12 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h12" checked={data.h12 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h12" checked={data.h12 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h12}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h13">
                                            Kemampuan bekerja secara efektif untuk mencapai tujuan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h13}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h13" checked={data.h13 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h13" checked={data.h13 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h13" checked={data.h13 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h13" checked={data.h13 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h13" checked={data.h13 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h13}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h14">
                                            Kemampuan mengelola pekerjaan secara efisien
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h14}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h14" checked={data.h14 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h14" checked={data.h14 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h14" checked={data.h14 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h14" checked={data.h14 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h14" checked={data.h14 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h14}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h15">
                                            Kemampuan bekerja sama dalam tim
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h15}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h15" checked={data.h15 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h15" checked={data.h15 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h15" checked={data.h15 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h15" checked={data.h15 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h15" checked={data.h15 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h15}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h16">
                                            Berkinerja baik walaupun ada di bawah tekanan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h16}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h16" checked={data.h16 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h16" checked={data.h16 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h16" checked={data.h16 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h16" checked={data.h16 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h16" checked={data.h16 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h16}</div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h17">
                                        Bagaimana keselarasan pekerjaan/wirausaha Anda sekarang dengan prodi/bidang keahlian/keterampilan Anda di satuan pendidikan/sekolah?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.h17}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1 = Sangat tidak selaras" name="h17" checked={data.h17 === '1 = Sangat tidak selaras' && true} /> <span className='text-sm text-gray-700'>1 = Sangat tidak selaras</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2 = Tidak selaras" name="h17" checked={data.h17 === '2 = Tidak selaras' && true} /> <span className='text-sm text-gray-700'>2 = Tidak selaras</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3 = Cukup selaras" name="h17" checked={data.h17 === '3 = Cukup selaras' && true} /> <span className='text-sm text-gray-700'>3 = Cukup selaras</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4 = Selaras" name="h17" checked={data.h17 === '4 = Selaras' && true} /> <span className='text-sm text-gray-700'>4 = Selaras</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5 = Sangat selaras" name="h17" checked={data.h17 === '5 = Sangat selaras' && true} /> <span className='text-sm text-gray-700'>5 = Sangat selaras</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.h17}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Seberapa bermanfaat Studi Anda dikaitkan dengan pekerjaan/wirausaha sekarang?
                                    </label>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h18">
                                            Teori dan praktik
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h18}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h18" checked={data.h18 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h18" checked={data.h18 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h18" checked={data.h18 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h18" checked={data.h18 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h18" checked={data.h18 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h18}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h19">
                                            Sikap dan kemampuan berkomunikasi (budaya kerja)
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h19}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h19" checked={data.h19 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h19" checked={data.h19 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h19" checked={data.h19 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h19" checked={data.h19 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h19" checked={data.h19 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h19}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h20">
                                            Jejaring kerja sama dengan DUDI
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h20}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h20" checked={data.h20 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h20" checked={data.h20 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h20" checked={data.h20 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h20" checked={data.h20 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h20" checked={data.h20 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h20}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h21">
                                            Kemandirian (budaya kerja)
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h21}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h21" checked={data.h21 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h21" checked={data.h21 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h21" checked={data.h21 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h21" checked={data.h21 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h21" checked={data.h21 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h21}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h22">
                                            Magang/prakerin
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h22}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h22" checked={data.h22 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h22" checked={data.h22 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h22" checked={data.h22 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h22" checked={data.h22 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h22" checked={data.h22 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h22}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h23">
                                            Kelengkapan sarana dan teknologi pembelajaran
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h23}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h23" checked={data.h23 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h23" checked={data.h23 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h23" checked={data.h23 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h23" checked={data.h23 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h23" checked={data.h23 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h23}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h24">
                                            Kemampuan bekerja sama (budaya kerja)
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h24}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h24" checked={data.h24 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h24" checked={data.h24 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h24" checked={data.h24 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h24" checked={data.h24 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h24" checked={data.h24 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h24}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h25">
                                            Menulis tugas akhir
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h25}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h25" checked={data.h25 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h25" checked={data.h25 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h25" checked={data.h25 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h25" checked={data.h25 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h25" checked={data.h25 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h25}</div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Bagaimana kepuasan Anda di instansi/lembaga/ perusahaan/tempat Anda bekerja?
                                    </label>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h26">
                                            Fleksibilitas waktu dalam bekerja
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h26}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h26" checked={data.h26 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h26" checked={data.h26 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h26" checked={data.h26 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h26" checked={data.h26 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h26" checked={data.h26 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h26}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h27">
                                            Rincian tugas dan pekerjaan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h27}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h27" checked={data.h27 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h27" checked={data.h27 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h27" checked={data.h27 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h27" checked={data.h27 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h27" checked={data.h27 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h27}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h28">
                                            Prospek karir
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h28}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h28" checked={data.h28 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h28" checked={data.h28 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h28" checked={data.h28 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h28" checked={data.h28 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h28" checked={data.h28 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h28}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h29">
                                            Keamanan dan kenyamanan dalam bekerja
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h29}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h29" checked={data.h29 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h29" checked={data.h29 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h29" checked={data.h29 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h29" checked={data.h29 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h29" checked={data.h29 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h29}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h30">
                                            Pengakuan status sosial
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h30}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h30" checked={data.h30 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h30" checked={data.h30 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h30" checked={data.h30 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h30" checked={data.h30 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h30" checked={data.h30 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h30}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h31">
                                            Kebebasan menyampaikan ide dan inisiatif
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h31}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h31" checked={data.h31 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h31" checked={data.h31 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h31" checked={data.h31 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h31" checked={data.h31 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h31" checked={data.h31 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h31}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h32">
                                            Gaji/upah
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h32}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h32" checked={data.h32 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h32" checked={data.h32 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h32" checked={data.h32 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h32" checked={data.h32 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h32" checked={data.h32 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h32}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h33">
                                            Suasana kerja
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h33}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h33" checked={data.h33 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h33" checked={data.h33 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h33" checked={data.h33 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h33" checked={data.h33 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h33" checked={data.h33 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h33}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h34">
                                            Pekerjaannya menantang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h34}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h34" checked={data.h34 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h34" checked={data.h34 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h34" checked={data.h34 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h34" checked={data.h34 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h34" checked={data.h34 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h34}</div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Bagaimana kepuasan Anda terhadap kondisi pembelajaran di satuan pendidikan?
                                    </label>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h35">
                                            Kualitas pendidik/guru/dosen/instruktur
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h35}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h35" checked={data.h35 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h35" checked={data.h35 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h35" checked={data.h35 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h35" checked={data.h35 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h35" checked={data.h35 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h35}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h36">
                                            Kesempatan berkomunikasi di luar kelas dengan pendidik/guru/dosen/instruktur
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h36}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h36" checked={data.h36 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h36" checked={data.h36 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h36" checked={data.h36 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h36" checked={data.h36 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h36" checked={data.h36 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h36}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h37">
                                            Bimbingan akademik secara umum
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h37}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h37" checked={data.h37 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h37" checked={data.h37 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h37" checked={data.h37 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h37" checked={data.h37 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h37" checked={data.h37 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h37}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h38">
                                            Bimbingan untuk menghadapi ujian akhir
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h38}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h38" checked={data.h38 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h38" checked={data.h38 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h38" checked={data.h38 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h38" checked={data.h38 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h38" checked={data.h38 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h38}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h39">
                                            Materi pelajaran/mata kuliah
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h39}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h39" checked={data.h39 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h39" checked={data.h39 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h39" checked={data.h39 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h39" checked={data.h39 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h39" checked={data.h39 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h39}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h40">
                                            Keberagaman program studi/bidang keahlian/keterampilan yang ditawarkan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h40}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h40" checked={data.h40 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h40" checked={data.h40 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h40" checked={data.h40 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h40" checked={data.h40 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h40" checked={data.h40 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h40}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h41">
                                            Sistem penilaian
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h41}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h41" checked={data.h41 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h41" checked={data.h41 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h41" checked={data.h41 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h41" checked={data.h41 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h41" checked={data.h41 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h41}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h42">
                                            Penekanan pada praktik dan praktikum
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h42}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h42" checked={data.h42 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h42" checked={data.h42 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h42" checked={data.h42 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h42" checked={data.h42 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h42" checked={data.h42 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h42}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h43">
                                            Metode pengajaran
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h43}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h43" checked={data.h43 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h43" checked={data.h43 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h43" checked={data.h43 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h43" checked={data.h43 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h43" checked={data.h43 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h43}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h44">
                                            Koleksi buku perpustakaan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h44}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h44" checked={data.h44 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h44" checked={data.h44 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h44" checked={data.h44 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h44" checked={data.h44 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h44" checked={data.h44 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h44}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h45">
                                            Ketersediaan bahan ajar
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h45}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h45" checked={data.h45 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h45" checked={data.h45 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h45" checked={data.h45 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h45" checked={data.h45 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h45" checked={data.h45 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h45}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h46">
                                            Kualitas dari fasilitas yang disediakan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h46}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h46" checked={data.h46 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h46" checked={data.h46 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h46" checked={data.h46 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h46" checked={data.h46 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h46" checked={data.h46 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h46}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h47">
                                            Kualitas program magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h47}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h47" checked={data.h47 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h47" checked={data.h47 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h47" checked={data.h47 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h47" checked={data.h47 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h47" checked={data.h47 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h47}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h48">
                                            Kualitas pembelajaran bahasa asing
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h48}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h48" checked={data.h48 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h48" checked={data.h48 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h48" checked={data.h48 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h48" checked={data.h48 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h48" checked={data.h48 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h48}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h49">
                                            Program pengembangan budaya kerja/karakter/soft skill
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h49}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h49" checked={data.h49 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h49" checked={data.h49 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h49" checked={data.h49 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h49" checked={data.h49 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h49" checked={data.h49 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h49}</div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h50">
                                        Bagaimana Anda mendapatkan instansi/lembaga/perusahaan untuk magang selama studi?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.h50}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Permintaan industri tempat magang" name="h50" checked={data.h50 === 'Permintaan industri tempat magang' && true} /> <span className='text-sm text-gray-700'>Permintaan industri tempat magang</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ditempatkan oleh satuan pendidikan yang telah bermitra dengan satuan pendidikan" name="h50" checked={data.h50 === 'Ditempatkan oleh satuan pendidikan yang telah bermitra dengan satuan pendidikan' && true} /> <span className='text-sm text-gray-700'>Ditempatkan oleh satuan pendidikan yang telah bermitra dengan satuan pendidikan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Mencari sendiri" name="h50" checked={data.h50 === 'Mencari sendiri' && true} /> <span className='text-sm text-gray-700'>Mencari sendiri</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.h50}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Menurut Anda, bagaimana kualitas magang selama studi?
                                    </label>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h51">
                                            Penempatan magang oleh satuan pendidikan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h51}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h51" checked={data.h51 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h51" checked={data.h51 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h51" checked={data.h51 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h51" checked={data.h51 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h51" checked={data.h51 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h51}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h52">
                                            Kejelasan kegiatan selama magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h52}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h52" checked={data.h52 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h52" checked={data.h52 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h52" checked={data.h52 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h52" checked={data.h52 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h52" checked={data.h52 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h52}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h53">
                                            Sarana praktik di tempat magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h53}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h53" checked={data.h53 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h53" checked={data.h53 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h53" checked={data.h53 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h53" checked={data.h53 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h53" checked={data.h53 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h53}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h54">
                                            Bimbingan selama magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h54}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h54" checked={data.h54 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h54" checked={data.h54 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h54" checked={data.h54 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h54" checked={data.h54 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h54" checked={data.h54 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h54}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h55">
                                            Evaluasi setelah selesai magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h55}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h55" checked={data.h55 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h55" checked={data.h55 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h55" checked={data.h55 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h55" checked={data.h55 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h55" checked={data.h55 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h55}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h56">
                                            Penyaluran bekerja setelah selesai magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h56}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h56" checked={data.h56 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h56" checked={data.h56 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h56" checked={data.h56 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h56" checked={data.h56 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h56" checked={data.h56 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h56}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h57">
                                            Kesesuaian tugas magang dengan prodi/bidang keahlian/jenis keterampilan di satuan pendidikan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h57}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h57" checked={data.h57 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h57" checked={data.h57 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h57" checked={data.h57 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h57" checked={data.h57 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h57" checked={data.h57 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h57}</div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h58">
                                            Kurikulum berstandar industri
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.h58}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h58" checked={data.h58 === '1' && true} /> <span className='text-sm text-gray-700'>1</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h58" checked={data.h58 === '2' && true} /> <span className='text-sm text-gray-700'>2</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h58" checked={data.h58 === '3' && true} /> <span className='text-sm text-gray-700'>3</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h58" checked={data.h58 === '4' && true} /> <span className='text-sm text-gray-700'>4</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h58" checked={data.h58 === '5' && true} /> <span className='text-sm text-gray-700'>5</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.h58}</div>}
                                    </div>
                                </div>
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        {dataKuesioner.d1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit4', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                        {dataKuesioner.e1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit5', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                        {dataKuesioner.f1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit6', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                    </div>
                                    <div className='w-1/2'>
                                        <div className="grid justify-end">
                                            <Button>
                                                Store
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
