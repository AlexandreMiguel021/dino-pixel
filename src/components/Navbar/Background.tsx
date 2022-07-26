import useWindowHeight from 'hooks/useWindowHeight'
import { useEffect, useState } from 'react'

const colors = ['shadow-emerald-400', 'shadow-purple-400', 'shadow-primary']

export default function NavbarBackground() {
  const height = useWindowHeight()
  const [currentShadow, setCurrentShadow] =
    useState<string>('shadow-emerald-400')

  useEffect(() => {
    const color = Math.floor(Math.random() * colors.length)

    setCurrentShadow(colors[color])
  }, [height])

  return (
    <div
      className={`fixed h-32 w-full bg-neutral-900 shadow-lg transition-all duration-300 ${currentShadow} ${
        height > 30 ? 'ranslate-y-0' : '-translate-y-full'
      }`}
    />
  )
}
