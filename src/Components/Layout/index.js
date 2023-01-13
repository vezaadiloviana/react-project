import React from 'react'
import Sidebar from '../Sidebar'

const Layout = ({content}) => {
  return (
    <div className='flex w-full bg-gray-50'>
        <div className='w-min'>
          <Sidebar/>
        </div>
        <div className='p-10 w-full'>
            {content}
        </div>
    </div>
  )
}

export default Layout