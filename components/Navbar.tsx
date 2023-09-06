import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-black sticky top-0 z-10'>
            <nav>
                <h1>
                    <Link href={'/'}>Photo-X-Store</Link>
                </h1>
            </nav>
        </header>
    )
}

export default Navbar