import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Perusahaan2(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        b1: dataKuesioner.b1 || '',
        b2: dataKuesioner.b2 || '',
        b3: dataKuesioner.b3 || '',
        b4: dataKuesioner.b4 || '',
        b5: dataKuesioner.b5 || '',
        b6: dataKuesioner.b6 || '',
        b7: dataKuesioner.b7 || '',
        b8: dataKuesioner.b8 || '',
        b9: dataKuesioner.b9 || '',
        b10: dataKuesioner.b10 || '',
        b11: dataKuesioner.b11 || '',
        b12: dataKuesioner.b12 || '',
        b13: dataKuesioner.b13 || '',
        b14: dataKuesioner.b14 || '',
        b15: dataKuesioner.b15 || '',
        b16: dataKuesioner.b16 || '',
        b17: dataKuesioner.b17 || '',
        b18: dataKuesioner.b18 || '',
        b19: dataKuesioner.b19 || '',
        b20: dataKuesioner.b20 || '',
        b21: dataKuesioner.b21 || '',
        b22: dataKuesioner.b22 || '',
        b23: dataKuesioner.b23 || '',
        b24: dataKuesioner.b24 || '',
        b25: dataKuesioner.b25 || '',
        b26: dataKuesioner.b26 || '',
        b27: dataKuesioner.b27 || '',
        b28: dataKuesioner.b28 || '',
        b29: dataKuesioner.b29 || '',
        b30: dataKuesioner.b30 || '',
        b31: dataKuesioner.b31 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.perusahaan.update2', dataKuesioner.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    const [showAlasan, setShowAlasan] = useState(false)
    const [showAlasan2, setShowAlasan2] = useState(false)
    const [showLainnya, setShowLainnya] = useState(false)
    const [showJikaYa, setShowJikaYa] = useState(false)
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Bagian 2. Kuesioner Penilaian Terhadap Kinerja Alumni</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b1">
                                        Apakah alumni bekerja pada bidang yang sesuai dengan keahliannya?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.b1}>
                                        <input onClick={() => setShowAlasan(true)} className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="b1" checked={data.b1 === 'Ya' && true} /> <span className='text-sm text-gray-700'>Ya</span>
                                        <input onClick={() => setShowAlasan(true)} className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="b1" checked={data.b1 === 'Tidak' && true} /> <span className='text-sm text-gray-700'>Tidak</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.b1}</div>}
                                </div>
                                {showAlasan && data.b1 == "Ya" || showAlasan && data.b1 == "Tidak" || data.b1 == 'Ya' || data.b1 == 'Tidak' ? (
                                    <div className="mb-5">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b2">
                                            Alasannya
                                        </label>
                                        <textarea className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='b2' value={data.b2} onChange={handleChange}/>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b2}</div>}
                                    </div> )
                                : ''}
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Dalam mengikuti peraturan yang ada di perusahaan, apakah alumni sudah memenuhi standard perusahaan dalam hal ini(silahkan pilih salah satu)
                                    </label>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b3">
                                            Tingkat kehadiran / The level of attendance
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b3}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b3" checked={data.b3 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b3" checked={data.b3 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b3" checked={data.b3 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b3" checked={data.b3 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b3}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b4">
                                            Tingkat Kedisiplinan / The level of discipline
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b4}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b4" checked={data.b4 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b4" checked={data.b4 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b4" checked={data.b4 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b4" checked={data.b4 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b4}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b5">
                                            Kemampuan menyelesaikan pekerjaan / The ability to get the job
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b5}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b5" checked={data.b5 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b5" checked={data.b5 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b5" checked={data.b5 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b5" checked={data.b5 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b5}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b6">
                                            Tingkat kreatifitas dan kemampuan berinisiatif / The level of initiative, creativity and ability
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b6}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b6" checked={data.b6 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b6" checked={data.b6 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b6" checked={data.b6 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b6" checked={data.b6 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b6}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b7">
                                            Kemampuan berkomunikasi / The Ability to communicate
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b7}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b7" checked={data.b7 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b7" checked={data.b7 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b7" checked={data.b7 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b7" checked={data.b7 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b7}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b8">
                                            Kemampuan beradaptasi dengan lingkungan kerja / The ability to adapt to the work environment
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b8}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b8" checked={data.b8 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b8" checked={data.b8 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b8" checked={data.b8 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b8" checked={data.b8 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b8}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b9">
                                            Kemampuan bersosialisasi dalam lingkungan kerja / The ability to socialize in a work environment
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b9}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b9" checked={data.b9 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b9" checked={data.b9 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b9" checked={data.b9 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b9" checked={data.b9 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b9}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b10">
                                            Sopan santun / The manners of politeness
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b10}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b10" checked={data.b10 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b10" checked={data.b10 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b10" checked={data.b10 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b10" checked={data.b10 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b10}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b11">
                                            Kerapian dalam berbusana / The Neatness in apparels
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b11}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b11" checked={data.b11 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b11" checked={data.b11 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b11" checked={data.b11 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b11" checked={data.b11 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b11}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b12">
                                            Integritas (etika dan moral) / The Integrity (ethical and moral)
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b12}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b12" checked={data.b12 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b12" checked={data.b12 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b12" checked={data.b12 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b12" checked={data.b12 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b12}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b13">
                                            Keahlian berdasarkan bidang ilmu (kompetensi utama) / The skill based on the knowledge (core competency)
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b13}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b13" checked={data.b13 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b13" checked={data.b13 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b13" checked={data.b13 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b13" checked={data.b13 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b13}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b14">
                                            Bahasa Inggris / English language
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b14}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b14" checked={data.b14 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b14" checked={data.b14 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b14" checked={data.b14 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b14" checked={data.b14 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b14}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b15">
                                            Penggunaan teknologi informasi / The use of information technology
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b15}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b15" checked={data.b15 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b15" checked={data.b15 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b15" checked={data.b15 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b15" checked={data.b15 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b15}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b16">
                                            Kerjasama tim / team Cooperation
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b16}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b16" checked={data.b16 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b16" checked={data.b16 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b16" checked={data.b16 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b16" checked={data.b16 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b16}</div>}
                                    </div>
                                    <div className="ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b17">
                                            Pengembangan diri / Self Development
                                        </label>
                                        <div className='flex items-center gap-x-3 border w-fit p-1 rounded-md px-3' onChange={handleChange} value={data.b17}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik Sekali" name="b17" checked={data.b17 === 'Baik Sekali' && true} /> <span className='text-sm text-gray-700'>Baik Sekali</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Baik" name="b17" checked={data.b17 === 'Baik' && true} /> <span className='text-sm text-gray-700'>Baik</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup" name="b17" checked={data.b17 === 'Cukup' && true} /> <span className='text-sm text-gray-700'>Cukup</span>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="kurang" name="b17" checked={data.b17 === 'kurang' && true} /> <span className='text-sm text-gray-700'>Kurang</span>
                                        </div>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b17}</div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b18">
                                        Berdasarkan pengamatan Bapak/Ibu terhadap kinerja alumni Politeknik Negeri Batam keterampilan atau ilmu pengetahuan apa yang harus dikembangkan agar relevan dengan kebutuhan perusahaan
                                    </label>
                                    <textarea className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='b18' value={data.b18} onChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.b18}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b19">
                                        Untuk pengembangan Politeknik Negeri Batam dalam hal menghasilkan lulusan yang memiliki nilai jual yang tinggi terhadap perusahaan, apa saran Bapak/Ibu
                                    </label>
                                    <textarea className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='b19' value={data.b19} onChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.b19}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b20">
                                        Apa saran Bapak/Ibu terkait Kinerja Alumni Politeknik Negeri Batam tersebut
                                    </label>
                                    <textarea className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='b20' value={data.b20} onChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.b20}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b21">
                                        Untuk perbaikan pelaksanaan perekrutan terhadap alumni Politeknik Negeri Batam di masa yang akan datang, menurut Bapak/Ibu apa yang perlu dilaksanakan oleh pengelola Politeknik Negeri Batam (jawaban bisa lebih dari satu)
                                    </label>
                                    <div className='block items-center gap-x-4'>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b21" onChange={e => setData('b21', e.target.checked)} defaultChecked={data.b21 == '1' && true}/> <span className='text-sm text-gray-700'>Meningkatkan komunikasi dengan perusahaan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b22" onChange={e => setData('b22', e.target.checked)} defaultChecked={data.b22 == '1' && true}/> <span className='text-sm text-gray-700'>Membangun kerjasama untuk perekrutan dengan perusahaan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b23" onChange={e => setData('b23', e.target.checked)} defaultChecked={data.b23 == '1' && true}/> <span className='text-sm text-gray-700'>Meningkatkan keterampilan calon alumni</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b24" onChange={e => setData('b24', e.target.checked)} defaultChecked={data.b24 == '1' && true}/> <span className='text-sm text-gray-700'>Meningkatkan kompetensi akademik calon alumni</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b25" onChange={e => setData('b25', e.target.checked)} defaultChecked={data.b25 == '1' && true} onClick={() => setShowLainnya(true)} /> <span className='text-sm text-gray-700'>Lainnya</span></div>
                                    </div>
                                    {showLainnya && data.b25 == "1" || data.b25 == '1' ? (
                                        <Input className='w-full lg:w-96' type='text' name='b26' value={data.b26} handleChange={handleChange}/> )
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b27">
                                        Dalam setiap tahunnya kami akan mewisuda alumni Politeknik Negeri Batam, bersediakah Perusahaan Bapak menerima alumni Politeknik batam
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.b27}>
                                        <input onClick={() => {setShowAlasan2(true); setShowJikaYa(true);}} className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="b27" checked={data.b27 === 'Ya' && true} /> <span className='text-sm text-gray-700'>Ya</span>
                                        <input onClick={() => setShowAlasan2(true)} className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="b27" checked={data.b27 === 'Tidak' && true} /> <span className='text-sm text-gray-700'>Tidak</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.b27}</div>}
                                </div>
                                {showAlasan2 && data.b27 == "Ya" || showAlasan2 && data.b27 == "Tidak" || data.b27 == 'Ya' || data.b27 == 'Tidak' ? (
                                    <div className="mb-5">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b28">
                                            Alasannya
                                        </label>
                                        <textarea className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' type='text' name='b28' value={data.b28} onChange={handleChange}/>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b28}</div>}
                                    </div> )
                                : ''}
                                {showJikaYa && data.b27 == "Ya" || data.b27 == 'Ya' ? (
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Dalam hal ini kepada siapakah kami dapat berkomunikasi:
                                    </label>
                                    <div className='ml-6'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b29">
                                            Nama
                                        </label>
                                        <Input className='w-full lg:w-96' type='text' name='b29' value={data.b29} handleChange={handleChange}/>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b29}</div>}
                                    </div>
                                    <div className='ml-6'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b30">
                                            Jabatan
                                        </label>
                                        <Input className='w-full lg:w-96' type='text' name='b30' value={data.b30} handleChange={handleChange}/>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b30}</div>}
                                    </div>
                                    <div className='ml-6'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b31">
                                            Telp/HP
                                        </label>
                                        <Input className='w-full lg:w-96' type='text' name='b31' value={data.b31} handleChange={handleChange}/>
                                        {errors && <div className='text-red-600 mt-1'>{errors.b31}</div>}
                                    </div>
                                </div> )
                                : ''}
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.perusahaan.edit', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
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
