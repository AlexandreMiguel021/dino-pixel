import Link from 'next/link'
import { ReactNode } from 'react'

type IconButtonProps = {
  children: ReactNode
  href: string
}

export default function IconButton({ href, children }: IconButtonProps) {
  return (
    <Link href={href}>
      <div className='text-aliceBlue cursor-pointer hover:scale-105 drop-shadow-xl  duration-200 text-4xl bg-primary p-3 items-center justify-center rounded-full w-12 flex h-12'>
        {children}
      </div>
    </Link>
  )
}
