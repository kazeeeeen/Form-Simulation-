import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Obo() {
  return (
    <main className="flex min-h-screen flex-col  px-12 py-8 container mx-auto bg-slate-300">
      <div className='grid grid-cols-1 lg:grid-cols-6'>
        <div className='col-span-7'>
        <h1 className='font-bold text-xl mb-4 md:text-2xl lg:text-4xl text-slate-800'>OBO</h1>
      <p className='text-base lg:text-lg'>This credential requires the following information:</p>
      <div className='mt-4 grid grid-cols-1 gap-x-4 gap-y-4 place-self-center lg:grid-cols-3 md:grid-cols-2' >
      <TextField id="fname" label="First Name" variant="outlined" fullWidth />
      <TextField id="mname" label="Middle Name" variant="outlined" />
      <TextField id="lname" label="Last Name" variant="outlined" />
      <TextField id="sname" label="Suffix Name" variant="outlined" />
      <TextField id="email" label="Email" variant="outlined" />
      <TextField id="mobile" label="Mobile Number" variant="outlined" />

      </div>
     <div className='mt-4 place-self-center grid grid-cols-1'>
     <Button id="next" variant="contained" className='w-full'>Next</Button>
     </div>
      </div>  
        </div>
    </main>
  )
}

