import Head from 'next/head'
import ProgressBar from '@/components/ProgressBar'
import PollingComponent from '@/components/Poll';
//<a href="https://www.flaticon.com/free-icons/good" title="good icons">Good icons created by Freepik - Flaticon</a>

const testData = [
  { completed: 60 },
  { completed: 30 },
  { completed: 53 },
];


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
        <div className='flex justify-center min-h-screen items-center gap-2'>
          {/* <div className='rounded-lg px-96 py-28 bg-midnight-md/30 flex flex-col basis-2/3'>
            <div>
              {testData.map((item, idx) => (
                <ProgressBar key={idx} completed={item.completed} />
              ))}
            </div>
          </div> */}

          <div className='rounded-lg px-96 py-28 bg-midnight-md/30'>
              <PollingComponent></PollingComponent>
            </div> 
        </div>
        

      </div>
    </>
  )
}
