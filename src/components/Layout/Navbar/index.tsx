import Image from 'next/image'
import Link from 'next/link'
import { Spiral as Hamburger } from 'hamburger-react'
import { Fragment, useState } from 'react'
import useMediaQuery from 'hooks/useMediaQuery'
import IconButton from 'components/IconAnchor'
import { Discord, Instagram, Twitter } from 'react-bootstrap-icons'
import NavbarBackground from './Background'

const items = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Gallery',
    href: '/#'
  },
  {
    title: 'Features',
    href: '/#'
  },
  {
    title: 'Roadmap',
    href: '/#'
  },
  {
    title: 'Team',
    href: '/#'
  },
  {
    title: 'FAQ',
    href: '/#'
  }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery(1024)

  const handleHamburgerToggle = () => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <nav
        className={`h-32 w-full fixed z-40 ${
          isMobile ? 'bg-neutral-800' : 'bg-transparent'
        }`}
      >
        <NavbarBackground />
        <div className='max-w-7xl m-auto flex gap-10 px-6 relative justify-between overflow-x-hidden items-center'>
          <div data-aos='fade-right'>
            <Image src='/images/dino-pixel-logo.png' width={120} height={120} />
          </div>

          {isMobile ? (
            <div>
              <ul
                className={`flex flex-col justify-center items-center space-y-5
                bg-neutral-800 w-full fixed left-0 h-screen drop-shadow-lg top-32 duration-200 ${
                  open ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                {items.map(({ title, href }) => (
                  <li className='text-cyan-50 text-center' key={title}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
                <div className='flex gap-6'>
                  <IconButton href='#'>
                    <Discord />
                  </IconButton>
                  <IconButton href='#'>
                    <Instagram />
                  </IconButton>
                  <IconButton href='#'>
                    <Twitter />
                  </IconButton>
                </div>
              </ul>
            </div>
          ) : (
            <ul className='flex gap-6' data-aos='fade-right'>
              {items.map(({ title, href }) => (
                <li
                  className='text-cyan-50 text-center transition-none hover:opacity-50 text-sm transition-opacity'
                  key={title}
                >
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          )}
          <div
            className='gap-6 flex-grow justify-end lg:flex hidden'
            data-aos='fade-left'
          >
            <IconButton href='#'>
              <Discord />
            </IconButton>
            <IconButton href='#'>
              <Instagram />
            </IconButton>
            <IconButton href='#'>
              <Twitter />
            </IconButton>
          </div>
          <button className='lg:hidden' onClick={handleHamburgerToggle}>
            <Hamburger color='white' />
          </button>
        </div>
      </nav>
      {/* <div className='h-32' /> */}
    </Fragment>
  )
}
