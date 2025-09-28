import { HomeIcon, Settings, UserCircle, Users } from 'lucide-react'
import React from 'react'
import { CiDatabase, CiHome, CiSettings, CiUser } from 'react-icons/ci'
export const MenuItems =  [
        {
            name: 'Home',
            icon: <HomeIcon size={20}/>,
            path: '/'
        },
        {
            name: 'Account',
            icon: <UserCircle size={20}/>,
            path: '/account'
        },
        {
            name: 'Settings',
            icon: <Settings size={20}/>,
            path: '/about'
        },
        {
            name: 'Users',
            icon: <Users size={20}/>,
            path: '/users'
        }
    ]
