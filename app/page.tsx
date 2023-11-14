import Header from '@/components/authHeader'
import { Button1 } from '@/components/ui/button'
import Image from 'next/image';
import student from "./images/shsStudent-removebg-preview.png";
import planeCrest from "./images/crest-removebg-preview.png";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start pt-3 gap-3 p-3">
      <div className='p-5 w-full'>
        <Header text={`LOGIN` } />
      </div>
      <section className='flex flex-col w-full gap-5 relative'>
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-semibold text-[#012503b3] w-3/6'>ARE YOU PROUD TO REP YOUR SCHOOL?</p>
          <p className='text-sm w-4/6 font-normal text-[#00000080]'>
            Let the world know of your Alma Matter. What is the slogan, show us the colors.
          </p>
          <div className='w-3/5'>
            <Button1 text='Rep Now' />
          </div>
        </div>
        <div className='w-full h-70 flex justify-end h-40'>
          <Image src={student} alt={`student`} className='w-auto h-50 abs'/>
        </div>
      </section>
      <section className='flex  justify-center'>
        <Image src={planeCrest} alt='crest' className='w-full ml' />
        <div className='flex flex-col gap-2 w-full justify-center'>
          <p className='text-sm font-semibold text-[#012503b3] w-full'>
            FIND YOUR NICE NEXT SHS IN GHANA
          </p>
          <p className='text-sm font-normal text-[#00000080]'>Browse through the numerous  glorious SHS in GHANA to find  your taste</p>
          <Button1 text='Get started' />
        </div>

      </section>
      
    </main>
  )
}
