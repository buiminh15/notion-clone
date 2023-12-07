'use client'

import { Cover } from '@/components/cover'
import { Toolbar } from '@/components/toolbar'
import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import React from 'react'
import dynamic from 'next/dynamic'

interface DocumentIdPageProps {
  params: {
    documentId: Id<'documents'>
  }
}

const DynamicEditor = dynamic(() => import('@/components/editor'), {
  ssr: false,
  loading: () => <div className='pl-[54px]'>
    <Skeleton className="h-14 w-full" />
  </div>,
})


function DocumentIdPage({ params: { documentId } }: DocumentIdPageProps) {
  const document = useQuery(api.documents.getById, {
    documentId
  })

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: documentId,
      content
    });
  };


  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    )
  }

  if (document === null) {
    return <div>Not found</div>
  }

  return (
    <div className='pb-40'>
      <Cover url={document.coverImage} />
      <div className='md:max-w-3xl lg:max-w-4xl mx-auto'>
        <Toolbar
          initialData={document}
        />
        <DynamicEditor onChange={onChange}
          initialContent={document.content} />
      </div>
    </div>
  )
}

export default DocumentIdPage