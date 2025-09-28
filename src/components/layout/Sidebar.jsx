import React from 'react'
import { MenuItems } from './menuItems/MenuItems'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '../buttons/themeToggle/ThemeToggle'
export const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col justify-between items-center bg-lightBg dark:bg-[#0c342c] min-h-dvh'>
      <div className='sidebar-header'>
        <h1>Sidebar</h1>
      </div>

      <div className='sidebar-body'>
        <ul className='flex flex-col items-start gap-2'>
          {MenuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1 w-32 rounded-md ${
                    isActive ? 'text-white bg-primary' : 'text-gray-500 dark:text-'
                  }`
                }
              >
                <span className='text-secondary text-lg font-bold'>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className='sidebar-footer'>
        <ThemeToggle/>
      </div>
    </div>
  )
}
