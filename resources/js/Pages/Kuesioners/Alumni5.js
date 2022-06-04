import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni5(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        e1: dataKuesioner.e1 || '',
        e2: dataKuesioner.e2 || '',
        e3: dataKuesioner.e3 || '',
        e4: dataKuesioner.e4 || '',
        e5: dataKuesioner.e5 || '',
        e6: dataKuesioner.e6 || '',
        e7: dataKuesioner.e7 || '',
        e8: dataKuesioner.e8 || '',
        e9: dataKuesioner.e9 || '',
        e10: dataKuesioner.e10 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update5', dataKuesioner.id))
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Lulusan yang Berwirausaha</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e1">
                                        Apa alasan anda berwirausaha?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.e1}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Menyalurkan minat dan kompetensi berwirausaha" name="e1" checked={data.e1 === 'Menyalurkan minat dan kompetensi berwirausaha' && true} /> <span className='text-sm text-gray-700'>Menyalurkan minat dan kompetensi berwirausaha</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ingin memperoleh penghasilan yang tidak terbatas" name="e1" checked={data.e1 === 'Ingin memperoleh penghasilan yang tidak terbatas' && true} /> <span className='text-sm text-gray-700'>Ingin memperoleh penghasilan yang tidak terbatas</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Memiliki kebebasan waktu dalam mengatur diri sendiri" name="e1" checked={data.e1 === 'Memiliki kebebasan waktu dalam mengatur diri sendiri' && true} /> <span className='text-sm text-gray-700'>Memiliki kebebasan waktu dalam mengatur diri sendiri</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak mau menjadi karyawan" name="e1" checked={data.e1 === 'Tidak mau menjadi karyawan' && true} /> <span className='text-sm text-gray-700'>Tidak mau menjadi karyawan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Melanjutkan usaha orang tua/keluarga" name="e1" checked={data.e1 === 'Melanjutkan usaha orang tua/keluarga' && true} /> <span className='text-sm text-gray-700'>Melanjutkan usaha orang tua/keluarga</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Terpaksa karena tidak mendapatkan pekerjaan" name="e1" checked={data.e1 === 'Terpaksa karena tidak mendapatkan pekerjaan' && true} /> <span className='text-sm text-gray-700'>Terpaksa karena tidak mendapatkan pekerjaan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="e1" checked={data.e1 === 'Lainnya' && true} onClick={(e)=>setShow(true)}/> <span className='text-sm text-gray-700'>Lainnya</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e1}</div>}
                                    {show && data.e1 == "Lainnya" || data.e1 == 'Lainnya' ? (
                                        <div>
                                            <Input className='w-full lg:w-96' type='text' name='e2' value={data.e2} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.e2}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e3">
                                        Bidang usaha/kegiatan inti
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='e3' onChange={handleChange} value={data.e3}>
                                        <option>-- Pilih Bidang --</option>
                                        <option>Pertanian Tanaman Padi & Palawija</option> <option>Konstruksi/Bangunan</option> <option>Perdagangan</option> <option>Hotel dan Rumah Makan</option> 
                                        <option>Transportasi dan Pergudangan</option> <option>Informasi dan Komunikasi</option> <option>Keuangan dan Asuransi</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e3}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e4">
                                        Apa status kewirausahaan Anda?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='e4' onChange={handleChange} value={data.e4}>
                                        <option>-- Pilih Status --</option>
                                        <option>Berusaha dengan modal sendiri</option>
                                        <option>Berusaha dengan modal bersama</option>
                                        <option>Berusaha dengan modal hibah</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e4}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e5">
                                        Bagaimana Anda melakukan pembukuan keuangan?
                                    </label>
                                    <select className='w-full lg:w-96 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm' name='e5' onChange={handleChange} value={data.e5}>
                                        <option>-- Pilih Pembukuan --</option>
                                        <option>Pembukuan lengkap (laba rugi dan neraca)</option>
                                        <option>Ada pembukuan sederhana untuk keperlua pribadi/pembayaran iuran/retribusi</option>
                                        <option>Tidak ada pembukuan tertulis</option>
                                        <option>Tidak tahu</option>
                                    </select>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e5}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e6">
                                        Kapan Anda mulai berwirausaha? (Bulan, Tahun)
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='e6' value={data.e6} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e6}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e7">
                                        Berapa rata-rata pendapatan Anda dalam berwirausaha per bulan?
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='e7' value={data.e7} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e7}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e8">
                                        Dimana lokasi wirausaha anda?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.e8}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Dalam Negeri" name="e8" checked={data.e8 === 'Dalam Negeri' && true} /> <span className='text-sm text-gray-700'>Dalam Negeri</span>
                                        <input  className='border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm' type="radio" value="Luar Negeri" name="e8" checked={data.e8 === 'Luar Negeri' && true} /> <span className='text-sm text-gray-700'>Luar Negeri</span>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e8}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e9">
                                        Berapa kali Anda pernah berwirausaha (termasuk usaha sekarang) sejak Anda lulus dari satuan pendidikan?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.e9}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Satu kali" name="e9" checked={data.e9 === 'Satu kali' && true} /> <span className='text-sm text-gray-700'>Satu kali</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Dua kali" name="e9" checked={data.e9 === 'Dua kali' && true} /> <span className='text-sm text-gray-700'>Dua kali</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tiga kali" name="e9" checked={data.e9 === 'Tiga kali' && true} /> <span className='text-sm text-gray-700'>Tiga kali</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lebih dari 3 kali" name="e9" checked={data.e9 === 'Lebih dari 3 kali' && true} /> <span className='text-sm text-gray-700'>Lebih dari 3 kali</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e9}</div>}
                                </div>
                                <div className="mb-5">  
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="e10">
                                        Bagaimana dampak pandemi Covid-19 terhadap usaha Anda?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.e10}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Memperluas usaha" name="e10" checked={data.e10 === 'Memperluas usaha' && true} /> <span className='text-sm text-gray-700'>Memperluas usaha</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Meningkatkan pendapatan" name="e10" checked={data.e10 === 'Meningkatkan pendapatan' && true} /> <span className='text-sm text-gray-700'>Meningkatkan pendapatan</span></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Mengurangi pendapatan" name="e10" checked={data.e10 === 'Mengurangi pendapatan' && true} /> <span className='text-sm text-gray-700'>Mengurangi pendapatan</span></div>
                                    </div>
                                    {errors && <div className='text-red-600 mt-1'>{errors.e10}</div>}
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
