'use client'

import { Spinner } from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-5xl md:text-6xl lg:text-3xl font-bold'>
        Your Ideas, Documents, & Plans. Unified, Welcome to <span className='underline'>Jotion</span>
      </h1>

      <h3 className='text-xl md:text-2xl lg:text-base font-medium'>Jotion is the connected workspace where better, faster work happens</h3>
      {
        isLoading && <div className='grid place-items-center w-full'>
          <Spinner size={'lg'} />
        </div>
      }
      {
        !isAuthenticated && !isLoading && (
          <SignInButton mode='modal'>
            <Button>
              Get Jotion Free
              <ArrowRight className='h-4 w-4 ml-2' />
            </Button>
          </SignInButton>
        )
      }
      {
        isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href={'/documents'}>
              Get Started
              <ArrowRight className='h-4 w-4 ml-2' />
            </Link>
          </Button>
        )
      }

    </div>
  )
}

export default Heading