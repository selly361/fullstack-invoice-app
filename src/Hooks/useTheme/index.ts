import { useEffect, useState } from 'react'

export const useTheme = () => {

  const preference = (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    
  const defaultTheme = localStorage.getItem('theme') || preference
    

  const [theme, setTheme] = useState(defaultTheme)
  

  useEffect(() => {
    
    localStorage.setItem('theme', theme)
    
    document.documentElement.setAttribute('data-theme', theme)
    
  }, [theme])

  const toggleTheme = () => setTheme((e) => (e == 'dark' ? 'light' : 'dark'))
  

  return { toggleTheme, theme }
  
}
