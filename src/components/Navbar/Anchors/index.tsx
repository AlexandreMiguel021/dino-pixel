import useWindowHeight from 'hooks/useWindowHeight'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type NavbarAnchorsProps = {
  title: string
  href: string
}

function NavbarAnchors({ href, title }: NavbarAnchorsProps) {
  const height = useWindowHeight()
  const [currentActive, setCurrentActive] = useState('')
  const [currentActiveMobile, setCurrentActiveMobile] = useState('Home')

  useEffect(() => {
    switch (height) {
      case height:
        height < 585 && setCurrentActive('Home')
        height < 973 && setCurrentActiveMobile('Home')

        height > 585 && setCurrentActive('Gallery')
        height > 973 && setCurrentActiveMobile('Gallery')

        height > 1130 && setCurrentActive('Features')
        height > 1520 && setCurrentActiveMobile('Features')

        height > 1993 && setCurrentActive('Roadmap')
        height > 3141 && setCurrentActiveMobile('Roadmap')

        height > 2800 && setCurrentActive('FAQ')
        height > 5650 && setCurrentActiveMobile('FAQ')
    }
  }, [height])

  return (
    <li
      className={`text-center text-sm  transition-none transition-opacity
      hover:opacity-50 ${
        currentActive === title ? 'lg:text-primary' : 'lg:text-aliceBlue'
      } ${currentActiveMobile === title ? 'text-primary' : 'text-aliceBlue'}`}
      key={title}
    >
      <Link href={href}>{title}</Link>
    </li>
  )
}

export default NavbarAnchors
