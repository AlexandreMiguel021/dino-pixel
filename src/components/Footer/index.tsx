import IconButton from 'components/IconAnchor'
import { Discord, Instagram, Twitter } from 'react-bootstrap-icons'

export default function Footer() {
  return (
    <footer className='bg-neutral-900'>
      <div className='max-w-7xl mx-auto gap-56 flex flex-wrap justify-between items-center px-4 py-14'>
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
        <div className='text-aliceBlue'>© 2022 Octo Space</div>
      </div>
    </footer>
  )
}
