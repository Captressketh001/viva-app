'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/app/ui/button'
import Link from 'next/link';
import { lusitana } from '@/app/ui/font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }
  return (
    <>
      <main className="flex min-h-screen flex-col items-center mx-auto m-4">
        <div className='flex h-[75px] w-[85%] lg:w-[80%] justify-between items-center'>
          <Image
            src="/viva-logo.svg"
            alt="Viva Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <Button onClick={() => router.push('/login')}>Request Beta Access</Button>
        </div>
        <div className='flex flex-col w-[85%] lg:w-[80%] lg:flex-row  items-center gap-10 sm:mt-5'>
          <div className='flex flex-col md:flex-row lg:w-4/5 gap-4'>
            <div className='before:content-pattern2 before:-rotate-14 before:left-0 before:-top-6 before:sm:rotate-0 before:sm:content-pattern before:relative before:md:top-5 before:sm:left-60 before:md:left-49  flex flex-col justify-center gap-6 md:w-4/5 lg:w-3/5'>
              <p className={`${lusitana.className} text-4xl text-gray-800 sm:text-5xl lg:text-6xl md:leading-normal`}>
                A <strong>Super Solution</strong><br /> for your <strong>Business.</strong>
              </p>
              <p className='md:w-3/4 text-justify'>Say goodbye to messy spreadsheets and hello to Viva, the all-in-one app built for busy service providers like you.
              </p>
              <Button onClick={() => router.push('/login')} className='flex items-center gap-5 self-start rounded-lg bg-white-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-blue-400 md:text-base'>Request Beta Access</Button>

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
              <p>Customers</p>
            </div>
            <div>
              <p className={`${lusitana.className} text-3xl text-gray-800 md:text-6xl lg:text-6xl md:leading-normal`}>
                <strong>2k+</strong>
              </p>
              <p>Businesses</p>
            </div>
            <div>
              <p className={`${lusitana.className} text-3xl text-gray-800 md:text-6xl lg:text-6xl md:leading-normal`}>
                <strong>1.2M</strong>
              </p>
              <p>Invoices</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[100%] lg:w-[80%] lg:flex-row rounded-3xl ustify-center items-center  md:w-full h-[800px] md:h-[900px] lg:h-[450px] bg-blue-400 gap-8 relative top-10 lg:top-60'>
          <div className='flex align-start justify-center items-center md:after:content-pattern3 lg:w-3/5'>
            <Image
              src="/image-jeremy-large.png"
              alt="User Image"
              height={24}
              width={500}
              className='hidden md:block object-scale-down aspect-down drop-shadow-lg md:relative md:bottom-8 md:h-[515px] '
            />
            <Image
              src="/image-jeremy-small.png"
              alt="User Image"
              height={24}
              width={200}
              className='md:hidden block drop-shadow-lg'
            />
          </div>
          <div className="lg:w-2/5 before:content-pattern3 sm:before:content-[''] flex text-center items-center lg:items-start sm:text-left flex-col text-white  gap-8">
            <p className='text-4xl text-white-800'>It just <strong>works.</strong></p>
            <q className='w-[90%] sm:w-[75%] text-center lg:text-justify'>Viva is seriously the best thing that&apos;s happened to my small business. It&apos;s easy to use, saves me tons of time, and I love it. If you&apos;re a solopreneur who needs a hand, this app is a game-changer!</q>
            <div className=''>
              <p className='text-2xl text-white-800'>Oluwakemi Omoyeni</p>
              <p>CEO, Viva Technologies</p>
            </div>
          </div>
        </div>
      </main>
      <footer className=' h-[400px] w-full bg-grey-400'>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-around lg:items-end sm:pb-10 gap-12 h-[100%]'>
          <Image
            src="/viva-logo.svg"
            alt="Viva Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <p>Copyright &copy; {getCurrentYear()} Viva </p>
          <div className='flex gap-12'>
            <Link href='https://twitter.com/cap_keth' target='_blank'><FontAwesomeIcon icon={faXTwitter as IconProp} /></Link>
            
           <Link href='https://www.linkedin.com/in/oluwakemi-omoyeni/' target='_blank'><FontAwesomeIcon icon={faLinkedin as IconProp} /></Link> 
           <Link href='https://www.youtube.com/@cap_keth' target='_blank'><FontAwesomeIcon icon={faYoutube as IconProp} /></Link> 
          </div>
        </div>

      </footer>
    </>
  )
}