import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni6(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        f1: dataKuesioner.f1 || '',
        f2: dataKuesioner.f2 || '',
        f3: dataKuesioner.f3 || '',
        f4: dataKuesioner.f4 || '',
        f5: dataKuesioner.f5 || '',
        f6: dataKuesioner.f6 || '',
        f7: dataKuesioner.f7 || '',
        f8: dataKuesioner.f8 || '', 
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update6', dataKuesioner.id))
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Lulusan yang mencari pekerjaan</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f1">
                                        Apa anda sedang mencari pekerjaan?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.f1}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="f1" checked={data.f1 === 'Ya' && true} /> <span className='text-sm text-gray-700'>Ya</span>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="f1" checked={data.f1 === 'Tidak' && true} /> <span className='text-sm text-gray-700'>Tidak</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.f1}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f2">
                                        Apakah anda sedang mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.f2}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="f2" checked={data.f2 === 'Ya' && true} /> <span className='text-sm text-gray-700'>Ya</span>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="f2" checked={data.f2 === 'Tidak' && true} /> <span className='text-sm text-gray-700'>Tidak</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.f2}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f3">
                                        Sudah berapa lama (hitungan bulan) Anda mencari pekerjaan atau mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='f3' value={data.f3} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.f3}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f4">
                                        Apa alasan utama mencari pekerjaan atau mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.f4}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tamat sekolah/tidak bersekolah lagi" name="f4" checked={data.f4 === 'Tamat sekolah/tidak bersekolah lagi' && true} /> <span className='text-sm text-gray-700'>Tamat sekolah/tidak bersekolah lagi</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tanggung jawab mencari nafkah" name="f4" checked={data.f4 === 'Tanggung jawab mencari nafkah' && true} /> <span className='text-sm text-gray-700'>Tanggung jawab mencari nafkah</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Menambah penghasilan" name="f4" checked={data.f4 === 'Menambah penghasilan' && true} /> <span className='text-sm text-gray-700'>Menambah penghasilan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)" name="f4" checked={data.f4 === 'Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)' && true} /> <span className='text-sm text-gray-700'>Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja" name="f4" checked={data.f4 === 'Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja' && true} /> <span className='text-sm text-gray-700'>Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Putus Hubungan Kerja (PHK)" name="f4" checked={data.f4 === 'Putus Hubungan Kerja (PHK)' && true} /> <span className='text-sm text-gray-700'>Putus Hubungan Kerja (PHK)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Usaha bangkrut (gulung tikar)" name="f4" checked={data.f4 === 'Usaha bangkrut (gulung tikar)' && true} /> <span className='text-sm text-gray-700'>Usaha bangkrut (gulung tikar)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Masa kontrak habis" name="f4" checked={data.f4 === 'Masa kontrak habis' && true} /> <span className='text-sm text-gray-700'>Masa kontrak habis</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="f4" checked={data.f4 === 'Lainnya' && true} onClick={(e)=>setShow(true)} /> <span className='text-sm text-gray-700'>Lainnya</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.f4}</div>}
                                    {show && data.f4 == "Lainnya" || data.f4 == 'Lainnya' ? (
                                        <div>
                                            <Input className='w-full lg:w-96' type='text' name='f5' value={data.f5} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.f5}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f6">
                                        Alasan utama tidak mencari pekerjaan atau mempersiapkan suatu usaha/wirausaha setelah lulus kuliah
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.f6}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sudah diterima bekerja/sudah mempunyai usaha, tetapi belum mulai bekerja/belum memulai usaha" name="f6" checked={data.f6 === 'Sudah diterima bekerja/sudah mempunyai usaha, tetapi belum mulai bekerja/belum memulai usaha' && true} /> <span className='text-sm text-gray-700'>Sudah diterima bekerja/sudah mempunyai usaha, tetapi belum mulai bekerja/belum memulai usaha</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Putus asa (sudah mencoba berulang kali tapi tidak kunjung mendapatkan pekerjaan)" name="f6" checked={data.f6 === 'Putus asa (sudah mencoba berulang kali tapi tidak kunjung mendapatkan pekerjaan)' && true} /> <span className='text-sm text-gray-700'>Putus asa (sudah mencoba berulang kali tapi tidak kunjung mendapatkan pekerjaan)</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sudah mempunyai pekerjaan/usaha" name="f6" checked={data.f6 === 'Sudah mempunyai pekerjaan/usaha' && true} /> <span className='text-sm text-gray-700'>Sudah mempunyai pekerjaan/usaha</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Mengurus rumah tangga" name="f6" checked={data.f6 === 'Mengurus rumah tangga' && true} /> <span className='text-sm text-gray-700'>Mengurus rumah tangga</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sedang melanjutkan pendidikan" name="f6" checked={data.f6 === 'Sedang melanjutkan pendidikan' && true} /> <span className='text-sm text-gray-700'>Sedang melanjutkan pendidikan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak mempunyai modal" name="f6" checked={data.f6 === 'Tidak mempunyai modal' && true} /> <span className='text-sm text-gray-700'>Tidak mempunyai modal</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="f6" checked={data.f6 === 'Lainnya' && true} onClick={(e)=>setShow(true)} /> <span className='text-sm text-gray-700'>Lainnya</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.f6}</div>}
                                    {show && data.f6 == "Lainnya" || data.f6 == 'Lainnya' ? (
                                        <div>
                                            <Input className='w-full lg:w-96' type='text' name='f7' value={data.f7} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.f7}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f8">
                                        Apakah alasan utama tersebut juga disebabkan oleh pandemi Covid-19?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.f8}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="f8" checked={data.f8 === 'Ya' && true} /> <span className='text-sm text-gray-700'>Ya</span>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="f8" checked={data.f8 === 'Tidak' && true} /> <span className='text-sm text-gray-700'>Tidak</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.f8}</div>}
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
