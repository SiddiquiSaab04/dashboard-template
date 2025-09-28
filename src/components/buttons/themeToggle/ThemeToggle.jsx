import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../features/theme/ThemeSlice'
export const ThemeToggle = () => {
    const theme = useSelector((state)=> state.theme.theme)
    const dispatch = useDispatch()
  return (
    <>
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
    </>
  )
}
