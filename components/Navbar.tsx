import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AlignJustify } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Navbar = () => {
  return (
    <div className='fixed top-0 z-10 h-16 w-full bg-stone-200 px-7 shadow-md'>
        <div className='flex justify-between items-center w-full h-full'>
            <Link href="/" className='text-primary font-semibold text-2xl font-exo-2 uppercase'>Prekospan</Link>

            <nav className='hidden md:flex items-center gap-5 text-stone-600 font-semibold font-oswald uppercase text-xl'>
                <Link href={'/'}>Home</Link>
                <Link href={'/menu'}>Menu</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/info'}>Contact Us</Link>
                <Link href={'/login'} className='bg-primary text-slate-200 px-4 py-2 rounded-full lowercase'>Login</Link>
            </nav>

            <div className='md:hidden'>
            <Sheet>
                <SheetTrigger>
                    <AlignJustify className='hover:border-none'/>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle><span className="text-primary uppercase font-semibold font-exo-2 text-2xl font-exo-2 selection:mt-[-9px]">DishAfrica</span></SheetTitle>
                    </SheetHeader>
                    <div className='grid gap-2 py-7 '>
                        <Link href="/" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase'>Home</Link>
                        <Link href="/" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase'>Our Menu</Link>
                        <Link href="/" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase'>About</Link>
                        <Link href="/" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase'>Contact us</Link>
                        <Link href="/" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase text-slate-600'>Login</Link>
                        <Link href="/" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase text-red-400'>Register</Link>
                    </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    </div>
  )
}

export default Navbar
