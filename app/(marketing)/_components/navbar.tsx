'use client'

import { useScrollTop } from '@/hooks'
import { cn } from '@/lib/utils'
import React from 'react'
import Logo from './logo'
import { ModeToggle } from '@/components/mode-toggle'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()

  return (
    <div className={cn('z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6', scrolled && 'border-b shadow-sm')}>
      <Logo />
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {
          isLoading && (
            <p>Loading...</p>
          )
        }
        {
          !isAuthenticated && !isLoading && (
            <>
              <SignInButton mode='modal'>
                <Button size={'sm'} >
                  Get Jotion free
                </Button>
              </SignInButton>
            </>
          )
        }
        {
          isAuthenticated && !isLoading && (
            <>
              <Button variant={'ghost'} size={'sm'} asChild >
                <Link href={'/documents'}>
                  Enter Jotion
                </Link>
              </Button>

              <UserButton afterSignOutUrl='/' />
            </>
          )
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar