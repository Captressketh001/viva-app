import Image from 'next/image'
import { Button } from '@/app/ui/button'
import Link from 'next/link';
import { lusitana } from '@/app/ui/font';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-[90%] lg:w-[80%] mx-auto m-4">
      <div className='flex h-[75px] w-full justify-between items-center'>
        <Image
          src="/viva-logo.svg"
          alt="Viva Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <Button>Request Beta Access</Button>
      </div>
      <div className='flex flex-col lg:flex-row w-full items-center gap-10 sm:mt-5'>
        <div className='flex flex-col md:flex-row lg:w-4/5 gap-4'>
        {/* <span className="absolute inset-y-0 left-1 flex items-center pl-2">
            <img src="/pattern-curved-line-1.svg" alt="Pattern" />
  </span> */}
          <div className='before:content-pattern2 before:-rotate-14 before:left-0 before:-top-6 before:sm:rotate-0 before:sm:content-pattern before:relative before:md:top-5 before:sm:left-60 before:md:left-49  flex flex-col justify-center gap-6 md:w-4/5 lg:w-3/5'>
            <p className={`${lusitana.className} text-4xl text-gray-800 md:text-6xl md:leading-normal`}>
              A <strong>Super Solution</strong><br /> for your <strong>Business.</strong>
            </p>
            <p className='md:w-3/4 text-justify'>Say goodbye to messy spreadsheets and hello to Viva, the all-in-one app built for busy service providers like you.
            </p>
            <Button className='flex items-center gap-5 self-start rounded-lg bg-white-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-blue-400 md:text-base'>Request Beta Access</Button>

          </div>
          <div className='md:relative md:-z-50 lg:right-24'>
            <Image
              src='/image-hero-portrait@2x.png'
              alt='Hero Image Desktop'
              width={300}
              height={6}
              className='hidden md:block'
            />
            <Image
              src='/image-hero-landscape.png'
              alt='Hero Image Mobile'
              width={1000}
              height={14}
              className='md:hidden block'
            />
          </div>

        </div>
        <div className='w-full items-center text-center gap-8 justify-around lg:w-1/5 flex flex-col md:max-lg:flex-row'>
          <div>
            <p className={`${lusitana.className} text-3xl text-gray-800 md:text-6xl lg:text-6xl md:leading-normal`}>
              <strong>100k+</strong>
            </p>
            <p>Companies</p>
          </div>
          <div>
            <p className={`${lusitana.className} text-3xl text-gray-800 md:text-6xl lg:text-6xl md:leading-normal`}>
              <strong>2k+</strong>
            </p>
            <p>Customers</p>
          </div>
          <div>
            <p className={`${lusitana.className} text-3xl text-gray-800 md:text-6xl lg:text-6xl md:leading-normal`}>
              <strong>1.2M</strong>
            </p>
            <p>Invoices</p>
          </div>
        </div>
      </div>

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
