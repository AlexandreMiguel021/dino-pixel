import { ReactNode } from 'react'

type HeadingProps = {
  children: ReactNode
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className='my-6 inline-block border-b-4 text-3xl text-aliceBlue'>
      {children}
    </h2>
  )
}
