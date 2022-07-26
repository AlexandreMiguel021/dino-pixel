import IconButton from 'components/IconAnchor'
import { Discord, Instagram, Twitter } from 'react-bootstrap-icons'

export default function Footer() {
  return (
    <footer className='w-full bg-neutral-900'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-14 lg:justify-between lg:gap-56'>
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
        <div className='text-aliceBlue'>© 2022 Dino Pixel</div>
      </div>
    </footer>
  )
}
