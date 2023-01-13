import React from 'react'
import Header from '../../Components/Header'
import Layout from '../../Components/Layout'
import ExampleTable from '../../Components/Table/ExampleTable'
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
          <div className='py-10'>
            <ExampleTable/>
          </div>
        </>
      }
      />
    </div>
  )
}

export default EmployeeList