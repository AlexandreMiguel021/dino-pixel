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
          <Disclosure.Button className='flex w-full justify-between rounded-sm border-2 border-primary bg-neutral-800/30 p-4 text-lg duration-200 hover:border-primary/80 hover:bg-neutral-800/10'>
            {title}
            {open ? (
              <div className='-rotate-90 text-primary duration-200'>{'>'}</div>
            ) : (
              <div className='rotate-90 text-primary  duration-200'>{'>'}</div>
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
              className='w-full border-2 border-t-0 border-dashed border-primary bg-neutral-800/90 py-5 px-4 text-sm'
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
