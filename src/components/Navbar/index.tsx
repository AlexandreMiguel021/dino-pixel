import Image from 'next/image'
import { Spiral as Hamburger } from 'hamburger-react'
import { Fragment, useState } from 'react'
import useMediaQuery from 'hooks/useMediaQuery'
import IconButton from 'components/IconAnchor'
import { Discord, Instagram, Twitter } from 'react-bootstrap-icons'
import NavbarBackground from './Background'
import NavbarAnchors from './Anchors'

const items = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Gallery',
    href: '#gallery'
  },
  {
    title: 'Features',
    href: '#features'
  },
  {
    title: 'Roadmap',
    href: '#roadmap'
  },
  {
    title: 'FAQ',
    href: '#faq'
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
        className={`fixed z-40 h-32 w-full ${
          isMobile ? 'bg-neutral-800' : 'bg-transparent'
        }`}
      >
        <NavbarBackground />
        <div className='relative m-auto flex max-w-7xl items-center justify-between gap-10 overflow-x-hidden px-6'>
          <div data-aos='fade-right'>
            <Image src='/images/dino-pixel-logo.png' width={120} height={120} />
          </div>

          {isMobile ? (
            <div>
              <ul
                className={`fixed left-0 top-32 flex h-screen
                w-full flex-col items-center justify-center space-y-5 bg-neutral-800 drop-shadow-lg duration-200 ${
                  open ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                {items.map((item) => (
                  <div
                    className='-translate-y-24'
                    key={item.title}
                    onClick={handleHamburgerToggle}
                  >
                    <NavbarAnchors {...item} />
                  </div>
                ))}
                <div className='flex -translate-y-24 gap-6'>
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
              {items.map((item) => (
                <NavbarAnchors key={item.title} {...item} />
              ))}
            </ul>
          )}
          <div
            className='hidden flex-grow justify-end gap-6 lg:flex'
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
            <Hamburger color='white' toggled={open} />
          </button>
        </div>
      </nav>
    </Fragment>
  )
}
