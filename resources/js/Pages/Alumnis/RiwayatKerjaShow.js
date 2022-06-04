import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage } from '@inertiajs/inertia-react';

export default function RiwayatKerjaShow(props) {
    const { riwayatKerja } = props
    const { auth } = usePage().props
    const [showDelete, setShowDelete] = useState(false)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{`Riwayat Kerja - ${riwayatKerja.perusahaan}`}</h2>}
        >
            <Head title="Riwayat Kerja"/>

            {showDelete && 
                <div className="bg-transparent bg-gray-800 bg-opacity-25 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                    <div className="bg-white px-16 py-14 rounded-xl text-center">
                        <div className='w-full grid justify-center mb-4 text-gray-800'>
                            <svg className="w-14 h-14 justify-center text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <span className='block mb-3 text-md font-semibold'>Are you sure you want to delete history?</span>
                        <button onClick={(e)=>setShowDelete(false)} className="mr-2 mt-5 inline-flex items-center px-4 py-2 bg-white border-2 border-black rounded-md font-semibold text-xs text-black uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150">Cancle</button>
                        <Link onClick={(e)=>setShowDelete(false)} className='inline-flex items-center px-4 py-2 bg-black border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-black transition ease-in-out duration-150' href={route('riwayatkerja.destroy', riwayatKerja.id)} method='delete' as="button">
                            Delete
                        </Link>
                    </div>
                </div>
            }

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col md:flex-row w-screen m-3">
                                <div className='w-full md:w-auto'>
                                    <table className="mr-4 flex items-center">
                                        <tbody>
                                            <tr>
                                                <td className='text-gray-700 text-md font-semibold' width={`150px`}>Nama Perusahaan</td>
                                                <td>:</td>    
                                                <td className='p-2 text-gray-800 text-md font-bold'>{riwayatKerja.perusahaan}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-gray-700 text-md font-semibold'>Bidang Kerja</td>
                                                <td>:</td>    
                                                <td className='p-2 text-gray-800 text-md font-bold'>{riwayatKerja.bidang}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='w-full md:w-auto'>
                                    <table className="flex items-center">
                                        <tbody>
                                            <tr>
                                                <td className='text-gray-700 text-md font-semibold' width={`150px`}>Durasi</td>
                                                <td>:</td>    
                                                <td className='p-2 text-gray-800 text-md font-bold'>{riwayatKerja.durasi}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-gray-700 text-md font-semibold'>Pendapatan</td>
                                                <td>:</td>    
                                                <td className='p-2 text-gray-800 text-md font-bold'>{riwayatKerja.pendapatan}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <Link className='mr-2 mt-5 inline-flex items-center px-4 py-2 bg-white border-2 border-black rounded-md font-semibold text-xs text-black uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150' href={route('riwayatkerja.index')}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            </Link>
                            <Link className='mr-2 inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150' href={route('riwayatkerja.edit', riwayatKerja.id)}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            </Link>
                            <button onClick={() => setShowDelete(true)} className='mr-2 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150'>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
