import Link from 'next/link'
import { ReactNode } from 'react'

type IconButtonProps = {
  children: ReactNode
  href: string
}

export default function IconButton({ href, children }: IconButtonProps) {
  return (
    <Link href={href}>
      <div className='flex h-12 w-12 cursor-pointer  items-center justify-center rounded-full bg-primary p-3 text-4xl text-aliceBlue drop-shadow-xl duration-200 hover:scale-105'>
        {children}
      </div>
    </Link>
  )
}
