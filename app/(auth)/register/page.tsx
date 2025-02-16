import React from 'react'
import RegisterForm from './RegisterForm'
import Link from 'next/link'
import GoogleButton from '../GoogleButton'

const date = new Date();
const year = date.getFullYear();

const page = () => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-8 space-y-4'>
      <Link href={'/'} className='text-center w-full text-primary lg:text-4xl text-3xl font-semibold font-exo-2 uppercase'>{process.env.NEXT_PUBLIC_APP_SHORT_TITLE}</Link>
      <h2 className='font-lilita-one w-full text-center text-lg text-stone-500'>Register</h2>
      <div className="w-3/4 px-5 md:w-1/3">
        <RegisterForm />
        <span className="w-full ps-4 text-start font-inter text-sm">
          Already have Account? &nbsp;
          <Link
            href={'/register'}
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </span>
      </div>
      <div className='w-full my-4 text-center text-gray-500'>
        or
      </div>
      <div className="w-3/4 px-5 md:w-1/3 pb-16">
      <GoogleButton>
          Register With Google
        </GoogleButton>
      </div>
      <div className='w-full h-px mx-4 md:mx-32 bg-slate-200' />
      <span className="text-sm font-semibold text-center text-stone-500">&copy; {year} All Right Reserved</span>
    </div>
  )
}

export default page
