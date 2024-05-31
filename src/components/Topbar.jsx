"use client"
import { navLinks } from '@/constants'
import { Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Topbar = () => {
    var [open,setOpen] = useState(false)


    return (
        <div className='bg-[#000c] border text-white'>
            <div className='max-w-6xl mx-auto py-2 flex justify-between items-center px-4'>

                <div>
                    <img src="/images/svgs/logo.svg" alt="" />
                </div>

                <div className={`${open ? "translate-y-0" : "-translate-y-[120%]"} md:translate-y-0 transition-all duration-1000  flex gap-3 absolute inset-0 bg-[#000] text-2xl p-4 md:p-0 md:text-base md:bg-transparent flex-col md:flex-row md:relative`}>
                    {
                        navLinks.map((v, i) => {
                            return (
                                <Link className='md:opacity-60' href={v.href}>{v.label}</Link>
                            )
                        })
                    }
                </div>

                <div className='flex gap-4'>
                        <div className='flex items-center gap-3'>
                            <Search size={18} />
                            <ShoppingBag size={18} />
                        </div>

                        <MemuBurger open={open} setOpen={setOpen} />
                </div>
                
            </div>
        </div>
    )
}

export default Topbar




const MemuBurger = ({open,setOpen}) =>{

  

    return(
        <div onClick={()=>setOpen(!open)} className='w-5 h-5 cursor-pointer  md:hidden flex gap-1 flex-col justify-center'>
            <div style={{transform:open ? "rotate(45deg) translateY(4px)":"rotate(0deg) translateY(0px)",}} className="h-[2px] transition-all bg-white"></div>
            <div style={{transform:open ? "rotate(-45deg) translateY(-4px)":"rotate(0deg) translateY(0px)",}} className="h-[2px] transition-all bg-white"></div>
        </div>
    )
}