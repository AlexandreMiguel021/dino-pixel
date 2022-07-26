type BoxProps = {
  description: string
  number: string | number
  title: string
}

export default function Box({ description, number, title }: BoxProps) {
  return (
    <div className='roadmap-box hover:roadmap-box-up z-10 flex w-full flex-col items-center gap-10 border-4 bg-neutral-900 px-4 duration-300 hover:scale-105  hover:border-primary lg:h-60 lg:flex-row'>
      <div className='roadmap-box mt-6 border-b-2 bg-primary px-7 text-xl lg:mt-0 lg:py-3'>
        <span>{number}</span>
      </div>
      <div className='space-y-5 pb-3 lg:pb-0'>
        <h3 className='text-xl text-cyan-400'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
