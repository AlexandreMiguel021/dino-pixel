import { Disclosure, Transition } from '@headlessui/react'

type AccordionProps = {
  title: string
  description: string
}
export default function Accordion({ title, description }: AccordionProps) {
  return (
    <Disclosure>
      {({ open }: { open: boolean }) => (
        <div className='flex flex-col'>
          <Disclosure.Button className='p-4 text-lg hover:border-primary/80 duration-200 hover:bg-neutral-800/10 bg-neutral-800/30 border-2 w-full border-primary rounded-sm flex justify-between'>
            {title}
            {open ? (
              <div className='-rotate-90 duration-200 text-primary'>{'>'}</div>
            ) : (
              <div className='rotate-90 duration-200  text-primary'>{'>'}</div>
            )}
          </Disclosure.Button>
          <Transition
            show={open}
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Disclosure.Panel
              className='bg-neutral-800/90 text-sm w-full py-5 border-2 border-t-0 border-primary border-dashed px-4'
              static
            >
              {description}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  )
}
