'use client'


import React from 'react'
import { AiFillLayout } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';

const BodySection = () => {
    const router = useRouter()


    return (
    <section>
        <div className='grid grid-cols-2 lg:grid-cols-6'>
        <div className='col-span-7 place-self-center pt-24'>
    <div className='grid gap-x-8 grid-cols-2'>
    <button onClick={() => router.push('/obo')}>
            <AiFillLayout className="w-10 h-10" />
            <p>OBO</p>
        </button>
        <button id="ctc" onClick={() => router.push('/ctc')}>
            <FaRegIdCard className="w-10 h-10" />
            <p>CTC</p>
        </button>
    </div>
   
        </div>
        </div>
    </section>
    )
    }

    export default BodySection