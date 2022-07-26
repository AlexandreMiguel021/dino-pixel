import Anchor from 'components/Anchor'
import Layout from 'components/Layout'
import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <Layout>
      <div className='pt-36'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <h1 className='text-7xl text-[#a26cff]'>404</h1>
          <h2 className='text-4xl text-aliceBlue'>Page not found</h2>
          <Anchor href='/' bg='bg-primary'>
            go to homepage
          </Anchor>
          <div className='mx-auto'>
            <Image src='/images/purple-dino.png' width={500} height={500} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
