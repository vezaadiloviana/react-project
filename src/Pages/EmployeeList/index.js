import React from 'react'
import Header from '../../Components/Header'
import Layout from '../../Components/Layout'
import ListEmployee from '../../Components/Table/ListEmployee'


const EmployeeList = () => {
  return (
    <div>
      <Layout
      content={
        <>
          <Header headerTitle={'Employee List'} />
          <div className='py-10'>
            <ListEmployee/>
          </div>
        </>
      }
      />
    </div>
  )
}

export default EmployeeList