import { useEffect, useState } from 'react'
export default function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(0)

  function handleScroll() {
    setWindowHeight(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return windowHeight
}
