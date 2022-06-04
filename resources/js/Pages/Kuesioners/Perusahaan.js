import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Perusahaan(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        a1: dataKuesioner.a1 || '',
        a2: dataKuesioner.a2 || '',
        a3: dataKuesioner.a3 || '',
        a4: dataKuesioner.a4 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.perusahaan.update', dataKuesioner.id))
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Bagian 1. Data Koresponden</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a1">
                                        Nama Lengkap
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a1' value={data.a1} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a1}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a2">
                                        Jabatan
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a2' value={data.a2} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a2}</div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a3">
                                        Email
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a3' value={data.a3} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a3}</div>}
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="a4">
                                        Telp/HP
                                    </label>
                                    <Input className='w-full lg:w-96' type='text' name='a4' value={data.a4} handleChange={handleChange}/>
                                    {errors && <div className='text-red-600 mt-1'>{errors.a4}</div>}
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
