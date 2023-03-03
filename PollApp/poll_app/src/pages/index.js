import Head from 'next/head'
import { Inter } from 'next/font/google'
import RoundedCard from '@/components/RoundedCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code Foo Polling App</title>
        <meta name="description" content="Polling app: Sam Fisher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='bg-midnight'>
        <div className='max-w-4xl mx-auto px-2 border border-white'>
          <header className='pt-20 mb-12'>
            <div className='flex justify-center'>
              <RoundedCard></RoundedCard>
            </div>
          </header>
        </div>
      </body>
    </div>
  )
}
