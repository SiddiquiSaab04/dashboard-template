import React from 'react'
import { MenuItems } from './menuItems/MenuItems'
import { NavLink } from 'react-router-dom'
export const Sidebar =() =>{
  return (
    <div  className='sidebar flex flex-col justify-around items-center bg-sidebarLightBg max-w-56 min-h-[100dvh]'>
        <div className='sidebar-header'>
            <h1>Sidebar</h1>
        </div>
        <div className='sidebar-body'>
      <ul className='flex flex-col items-start gap-2'>
      {
            MenuItems.map((item)=>
                <NavLink to={item.path} key={item.path}>
                  <li className=''>  {item.name}</li>
                </NavLink>
            )
           }
      </ul>
        </div>
        <div className='sidebar-footer'>

        </div>
        </div>
  )
}
