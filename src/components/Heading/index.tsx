import { ReactNode } from 'react'

type HeadingProps = {
  children: ReactNode
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className='text-3xl inline-block my-6 text-aliceBlue border-b-4'>
      {children}
    </h2>
  )
}
