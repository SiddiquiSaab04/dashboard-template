import React from 'react'
import { Navbar } from './ Navbar'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
export const Layout = () => {
  return (
    <div className='layout flex h-dvh w-full'>
<div className=' w-56'>
<Sidebar/>
</div>
<div className="flex flex-col flex-1">
    <div>
    <Navbar/>
    </div>
    <div>
        <Outlet/>
    </div>
    <div>
        <Footer/>
    </div>
</div>
    </div>
  )
}
