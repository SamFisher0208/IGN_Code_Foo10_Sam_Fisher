import Head from 'next/head'
import RoundedCard from '@/components/RoundedCard'
//<a href="https://www.flaticon.com/free-icons/good" title="good icons">Good icons created by Freepik - Flaticon</a>

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Foo Polling App</title>
        <meta name="description" content="Polling app: Sam Fisher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/positive-vote.png" />
      </Head>
      <div className='bg-blurry bg-no-repeat bg-cover bg-midnight'>
        <div className='flex justify-center min-h-screen items-center  border-white'>
          <RoundedCard></RoundedCard>
        </div>
      </div>
    </>
  )
}
