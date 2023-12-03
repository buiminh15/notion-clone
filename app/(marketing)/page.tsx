import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Footer, Heading, Heroes } from './_components'


export default function MarketingPage() {
  return (  
    <div className='min-h-full flex flex-col'>  
      <div className='grid place-items-center flex-1 text-center'>
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  )
}
