'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function Heading() {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-5xl md:text-6xl lg:text-3xl font-bold'>
        Your Ideas, Documents, & Plans. Unified, Welcome to <span className='underline'>Jotion</span>
      </h1>

      <h3 className='text-xl md:text-2xl lg:text-base font-medium'>Jotion is the connected workspace where better, faster work happens</h3>

      <Button>
        Get Started
        <ArrowRight className='h-4 w-4 ml-2'/>
      </Button>
    </div>
  )
}

export default Heading