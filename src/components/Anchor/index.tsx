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
        className={`flex ${bg} w-full cursor-pointer items-center gap-3 rounded-sm p-4 drop-shadow-xl duration-200 hover:-translate-y-1 hover:opacity-95 sm:max-w-max`}
      >
        {children}
      </div>
    </Link>
  )
}
