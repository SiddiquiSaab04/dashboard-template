import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import './App.css'
import { Layout } from './components/layout/Layout'
function App() {
const theme = useSelector((state)=>state.theme.theme)
useEffect(()=>{
  if(theme === "light") {
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove("dark")
  }
},[theme])
  return (
    <>
<Layout/>
    </>
  )
}

export default App
