'use client'

import { Spinner } from '@/components/spinner'
import { useConvexAuth } from 'convex/react'
import { redirect } from 'next/navigation'
import React from 'react'
import Navigation from './_components/navigation'
import SearchCommand from '@/components/search-command'

interface IMainLayout {
  children: React.ReactNode
}

function MainLayout({ children }: IMainLayout) {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) {
    return <div className='h-full grid place-items-center'>
      <Spinner size={'lg'} />
    </div>
  }

  if (!isAuthenticated) {
    return redirect('/')
  }

  return (
    <div className='h-full flex dark:bg-[#1f1f1f]'>
      <Navigation />
      <main className='flex-1 overflow-y-auto'>
        <SearchCommand />
        {children}
      </main>
    </div>
  )
}

export default MainLayout