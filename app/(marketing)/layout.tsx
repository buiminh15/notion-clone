import React from 'react'
import { Navbar } from './_components'

interface IMarketingLayout {
  children: React.ReactNode
}

function MarketingLayout({children}: IMarketingLayout) {
  return (
    <div className='h-full dark:bg-[#1f1f1f]'>
      <Navbar />
      <main className='h-full pt-4'>
        {children}
      </main>
    </div>
  )
}

export default MarketingLayout