import React from 'react'
import Image from 'next/image' // Import the Image component
import Link from 'next/link' 
import { Button } from '@/components/ui/button'

function Header() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/contact'
        },
    ]

    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image 
                    src='/logo.svg' 
                    alt='logo'
                    width={40} 
                    height={40} 
                />
            
                    <ul className='md:flex gap-10 hidden'>
                        {Menu.map((item,index) => (
                            <Link href={item.path}>
                            <li className='hover:text-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                                {item.name}
                            </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <Button>Get Started</Button>
            
        </div>
    )
}

export default Header
