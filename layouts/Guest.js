import Head from 'next/head'

export default function Guest({ header, title, children }) {
  return (
    <div className="flex items-center justify-center min-h-screen antialiased tracking-tighter text-gray-800 bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <div className='w-1/3'>
        <div className='bg-white border shadow-sm rounded-2xl outline-hidden'>
          <div className='px-6 py-3 border-b bg-gray-50/50'>
            <h1 className='text-xl font-light uppercase'>{header}</h1>
          </div>
          <div className='px-6 py-3'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
