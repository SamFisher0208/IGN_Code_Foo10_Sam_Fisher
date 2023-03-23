import Head from 'next/head'
import PollingComponent from '@/components/Poll';
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
      <div className='bg-midnight'>
        <div className='flex justify-center min-h-screen items-center'>
          <div className='rounded-lg px-40 py-28 bg-midnight-md/30'>
              <PollingComponent></PollingComponent>
          </div> 
        </div>
      </div>
    </>
  )
}
