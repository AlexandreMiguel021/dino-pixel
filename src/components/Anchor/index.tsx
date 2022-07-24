import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

type AnchorProps = {
  children: ReactNode
  bg: 'bg-neutral-700' | 'bg-primary'
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function Anchor(props: AnchorProps) {
  const { href, children, bg, ...rest } = props
  return (
    <Link href={href!} {...rest}>
      <div
        className={`flex ${bg} w-full sm:max-w-max p-4 rounded-sm items-center gap-3 drop-shadow-xl cursor-pointer hover:-translate-y-1 duration-200 hover:opacity-95`}
      >
        {children}
      </div>
    </Link>
  )
}
