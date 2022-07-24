type BoxProps = {
  description: string
  number: string | number
  title: string
}

export default function Box({ description, number, title }: BoxProps) {
  return (
    <div className='w-full flex items-center gap-10 px-4 flex-col lg:flex-row lg:h-60 bg-neutral-900 border-4 roadmap-box z-10 hover:border-primary  hover:roadmap-box-up hover:scale-105 duration-300'>
      <div className='bg-primary px-7 mt-6 lg:mt-0 lg:py-3 border-b-2 roadmap-box text-xl'>
        <span>{number}</span>
      </div>
      <div className='space-y-5 pb-3 lg:pb-0'>
        <h3 className='text-xl text-cyan-400'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
