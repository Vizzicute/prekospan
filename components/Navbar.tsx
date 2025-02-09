"use client";

import Link from 'next/link'
import React from 'react'
import { AlignJustify } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import LoadingButton from './LoadingButton'
import { INITIAL_USER, useUserContext } from '@/context/AuthContext';
import { redirect } from 'next/navigation';
  

const Navbar = () => {

    const { mutateAsync: signOutAccount } = useSignOutAccount();
    const { user, setUser, isAuthenticated, setIsAuthenticated, isLoading } = useUserContext();

    const handleSignout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        signOutAccount();
        setIsAuthenticated(false);
        setUser(INITIAL_USER);
        redirect('/login');
    }

  return (
    <div className='fixed top-0 z-10 h-16 w-full bg-stone-200 px-7 shadow-md'>
        <div className='flex justify-between items-center w-full h-full'>
            <Link href="/" className='text-primary font-semibold text-2xl font-exo-2 uppercase'>{process.env.NEXT_PUBLIC_APP_SHORT_TITLE}</Link>

            <nav className='hidden md:flex items-center gap-5 text-stone-600 font-semibold font-oswald uppercase text-xl'>
                <Link href={'/'}>Home</Link>
                <Link href={'/menu'}>Menu</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/info'}>Contact Us</Link>
                {!isAuthenticated ? (
                <Link href={'/login'} className='bg-primary text-slate-200 px-4 py-2 rounded-full lowercase'>Login</Link>
                ) : (
                    <LoadingButton
                        loading={isLoading}
                        onClick={(e) => handleSignout(e)}
                        className='bg-primary text-slate-200 px-4 py-2 rounded-full lowercase'
                    >
                        Logout
                    </LoadingButton>
                )}
            </nav>

            <div className='md:hidden'>
            <Sheet>
                <SheetTrigger>
                    <AlignJustify className='hover:border-none'/>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle><span className="text-primary uppercase font-semibold font-exo-2 text-2xl font-exo-2 selection:mt-[-9px]">{process.env.NEXT_PUBLIC_APP_SHORT_TITLE}</span></SheetTitle>
                    </SheetHeader>
                    <div className='grid gap-2 py-7 '>
                        <Link href="/" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase'>Home</Link>
                        <Link href="/menu" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase'>Our Menu</Link>
                        <Link href="/about" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase'>About</Link>
                        <Link href="/info" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase'>Contact us</Link>
                        { !isAuthenticated ? (
                            <>
                                <Link href="/login" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase text-slate-600'>Login</Link>
                                <Link href="/register" className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase text-red-400'>Register</Link>
                            </>
                        ) : (
                            <LoadingButton
                                loading={isLoading}
                                onClick={(e) => handleSignout(e)}
                                className='text-center bg-stone-50 w-full text-2xl py-3 font-oswald font-semibold uppercase text-red-400'
                            >
                                Logout
                            </LoadingButton>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    </div>
  )
}

export default Navbar
