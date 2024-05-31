"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  // var [ isClient,setIsClient] = useState(false)
  // var num = Math.random()

  // useEffect(()=>{
  //   setIsClient(true)
  // },[])

  return (
    <div>
      <header>
        <nav className='flex justify-between items-center border py-2 px-4'>
            <img className='w-28' src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" />
            <div className='flex gap-3'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact-us">Contact</Link>
                <Link href="/blog">Blog</Link>
            </div>
            <button className="border">Click me</button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
