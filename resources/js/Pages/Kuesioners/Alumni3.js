import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni3(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        c1: dataKuesioner.c1 || '',
        c2: dataKuesioner.c2 || '',
        c3: dataKuesioner.c3 || '',
        c4: dataKuesioner.c4 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update3', dataKuesioner.id))
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Ketenagakerjaan</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c1">
                                        Dalam seminggu terakhir apakah Anda bekerja/wirausaha?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.c1}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="c1" checked={data.c1 === 'Ya' && true} onClick={(e)=>setShow(true)} /> <span className='text-sm text-gray-700'>Ya</span>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="c1" checked={data.c1 === 'Tidak' && true} onClick={(e)=>setShow(false)} /> <span className='text-sm text-gray-700'>Tidak</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.c1}</div>}
                                </div>
                                {show && data.c1 == "Ya" || data.c1 == 'Ya' ? (
                                    <div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c2">
                                                Status/kedudukan dalam bekerja/berusaha/wirausaha?
                                            </label>
                                            <div className='block items-center gap-x-4' onChange={handleChange} value={data.c2}>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="berusaha/berwirausaha sendiri tanpa dibantu orang lain" name="c2" checked={data.c2 === 'berusaha/berwirausaha sendiri tanpa dibantu orang lain' && true} /> <span className='text-sm text-gray-700'>Berusaha/berwirausaha sendiri tanpa dibantu orang lain</span></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="berusaha/berwirausaha dengan dibantu pekerja tak dibayar" name="c2" checked={data.c2 === 'berusaha/berwirausaha dengan dibantu pekerja tak dibayar' && true} /> <span className='text-sm text-gray-700'>Berusaha/berwirausaha dengan dibantu pekerja tak dibayar</span></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="berusaha/berwirausaha dengan dibantu buruh/pekerja dibayar" name="c2" checked={data.c2 === 'berusaha/berwirausaha dengan dibantu buruh/pekerja dibayar' && true} /> <span className='text-sm text-gray-700'>Berusaha/berwirausaha dengan dibantu buruh/pekerja dibayar</span></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="buruh/karyawan/pegawai" name="c2" checked={data.c2 === 'buruh/karyawan/pegawai' && true} /> <span className='text-sm text-gray-700'>Buruh/karyawan/pegawai</span></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="pekerja bebas (tidak punya majikan tetap)" name="c2" checked={data.c2 === 'pekerja bebas (tidak punya majikan tetap)' && true} /> <span className='text-sm text-gray-700'>Pekerja bebas (tidak punya majikan tetap)</span></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="pekerja keluarga/pekerja tidak dibayar" name="c2" checked={data.c2 === 'pekerja keluarga/pekerja tidak dibayar' && true} /> <span className='text-sm text-gray-700'>Pekerja keluarga/pekerja tidak dibayar</span></div>
                                            </div>
                                            {errors && <div className='text-red-600 mt-1'>{errors.c2}</div>}
                                        </div>
                                    </div> )
                                : ''}
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c3">
                                        Dalam seminggu terakhir, apakah Anda melakukan kegiatan untuk memperoleh penghasialan/pendapatan/uang?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.c3}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="c3" checked={data.c3 === 'Ya' && true} /> <span className='text-sm text-gray-700'>Ya</span>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="c3" checked={data.c3 === 'Tidak' && true} /> <span className='text-sm text-gray-700'>Tidak</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.c3}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="c4">
                                        Aktivitas apa yang sedang anda lakukan saat ini?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.c4}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Bekerja" name="c4" checked={data.c4 === 'Bekerja' && true} /> <span className='text-sm text-gray-700'>Bekerja</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Berwirausaha" name="c4" checked={data.c4 === 'Berwirausaha' && true} /> <span className='text-sm text-gray-700'>Berwirausaha</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sedang Mencari Pekerjaan" name="c4" checked={data.c4 === 'Sedang Mencari Pekerjaan' && true} /> <span className='text-sm text-gray-700'>Sedang Mencari Pekerjaan</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.c4}</div>}
                                </div>
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit2', dataKuesioner.id)}>
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
