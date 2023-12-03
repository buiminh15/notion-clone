import Image from 'next/image'
import React from 'react'

function Heroes() {
  return (
    <div className='grid place-items-center max-w-5xl'>
      <div className='flex items-center'>
        <div className='relative w-[350px] aspect-square md:w-[400px] lg:w-[300px]'>
          <Image src={'/documents.png'} fill alt='Documents' className='object-contain dark:hidden'/>
          <Image src={'/documents-dark.png'} fill alt='Documents' className='object-contain hidden dark:block'/>
        </div>

        <div className='relative aspect-square hidden md:block w-[400px]'>
          <Image src={'/reading.png'} fill className='object-contain dark:hidden' alt='Reading'/>
          <Image src={'/reading-dark.png'} fill className='object-contain hidden dark:block' alt='Reading'/>
        </div>
      </div>


    </div>
  )
}

export default Heroes