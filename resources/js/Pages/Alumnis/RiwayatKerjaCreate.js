import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Edit(props) {
    const { data, setData, post, errors } = useForm({
        perusahaan: '',
        bidang: '',
        durasi: '',
        pendapatan: '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        post(route('riwayatkerja.store'))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <span>Riwayat Kerja - Create</span>
                    </h2>}
        >
            <Head title="Riwayat Kerja" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div>
                                <form onSubmit={updateHandler}>
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="perusahaan">
                                                    Perusahaan <span className='text-red-600 font-bold'>*</span>
                                                </label>
                                                <Input placeholder='Perusahaan' className='w-full' type='text' name='perusahaan' value={data.perusahaan} handleChange={handleChange}/>
                                                {errors && <div className='text-red-600 mt-1'>{errors.perusahaan}</div>}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="bidang">
                                                    Bidang <span className='text-red-600 font-bold'>*</span>
                                                </label>
                                                <Input placeholder='Bidang' className='w-full' type='text' name='bidang' value={data.bidang} handleChange={handleChange}/>
                                                {errors && <div className='text-red-600 mt-1'>{errors.bidang}</div>}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="durasi">
                                                    Durasi (Bulan/tahun) <span className='text-red-600 font-bold'>*</span>
                                                </label>
                                                <Input placeholder='Durasi' className='w-full' type='text' name='durasi' value={data.durasi} handleChange={handleChange}/>
                                                {errors && <div className='text-red-600 mt-1'>{errors.durasi}</div>}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="pendapatan">
                                                    Pendapatan <span className='text-red-600 font-bold'>*</span>
                                                </label>
                                                <Input placeholder='Pendapatan' className='w-full' type='text' name='pendapatan' value={data.pendapatan} handleChange={handleChange}/>
                                                {errors && <div className='text-red-600 mt-1'>{errors.pendapatan}</div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-left sm:px-6">
                                        <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2' href={route('riwayatkerja.index')}>Cancel</Link>
                                        <Button>
                                            Store
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
