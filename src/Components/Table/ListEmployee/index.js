import { Icon } from '@iconify/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddEmploye from '../../Modal/AddEmployee'
// import avatar from '../../../Assets/img/avatar.jpg'

const ListEmployee = () => {

  // consume API Read Data
  const [itemsEmployee, setItemsEmployee] = useState('')
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users`)
      setItemsEmployee(response.data.data)
      console.log(response.data)

    } catch (error) {

    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  // Modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <div className="relative bg-white p-5 rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between py-3">
          <div className="flex flex-row justify-between items-center md:items-start md:flex-col">
            <h1 className="font-bold text-xl text-black">Employee</h1>
            <p className="text-sm text-gray-500">1.000 List of Employees</p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="relative">
              <input type="search" id="default-search" className="block px-4 py-2 pr-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Produk " required />
              <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>
            <button onClick={handleOpenModal} className="text-white bg-[#E44E21] rounded-md px-4 py-2 text-sm">
              Add Employee
            </button>
          </div>
        </div>

        <div className="overflow-auto h-full">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-500 uppercase bg-[#F1F1F1] border-b">
              <tr>
                <th scope="col" className="py-3 px-6 truncate">
                  Id
                </th>
                <th scope="col" className="py-3 px-6 truncate">
                  First Name
                </th>
                <th scope="col" className="py-3 px-6 truncate">
                  Last Name
                </th>
                <th scope="col" className="py-3 px-6 truncate">
                  Email
                </th>
                <th scope="col" className="py-3 px-6 truncate">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              {Object.values(itemsEmployee).map((data) => {
                return (
                  <tr key={data.id} className="bg-white border-b">
                    <td className="py-4 px-6 truncate font-semibold">
                      {data.id}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-row items-center font-semibold gap-5">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
                          <img className="w-8 h-8" src={data.avatar} alt="" />
                        </div>
                        <h1 className="truncate">{data.first_name}</h1>
                      </div>
                    </td>
                    <td className="py-4 px-6 truncate font-semibold">
                      {data.last_name}
                    </td>
                    <td className="py-4 px-6 truncate font-semibold">
                      {data.email}
                    </td>
                    <td className="py-4 px-6 truncate font-semibold">
                      <div className='flex flex-row gap-5'>
                        <button type="button">
                          <Icon className='w-5 h-5' icon="akar-icons:edit" />
                        </button>
                        <button type="button">
                          <Icon className='w-5 h-5' icon="ant-design:delete-outlined" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })
              }

            </tbody>
          </table>
        </div>

        <div className="text-sm flex justify-center gap-5 flex-col md:flex-row md:justify-between text-gray-700 bg-white rounded-b-lg px-5 pt-5">
          <div className="flex items-center gap-4">
            Show
            <select className="bg-gray-100 border  border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2">
              <option selected value="">5</option>
              <option value="">10</option>
              <option value="">20</option>
            </select>
            <p>of <span className="font-bold">100</span> </p>
          </div>
          <div>
            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center">
                <li>
                  <div
                    className="block py-2 ml-0 leading-tight text-gray-500 hover:text-cyan-500">
                    <span className="sr-only">Previous</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </li>
                <li>
                  <div aria-current="page"
                    className="py-2 px-3  ml-2 rounded-lg leading-tight text-white bg-blue-600 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</div>
                </li>
                <li>
                  <div
                    className="py-2 px-3  ml-2 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</div>
                </li>
                <li>
                  <div
                    className="py-2 px-3  ml-2 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">3</div>
                </li>
                <li>
                  <div
                    className="py-2 px-3  ml-2 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</div>
                </li>
                <li>
                  <div
                    className="py-2 px-3  ml-2 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">10</div>
                </li>
                <li>
                  <div
                    className="block py-2 ml-2 leading-tight text-gray-500 hover:text-cyan-500">
                    <span className="sr-only">Next</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
        </div>
      </div>

      {/* modal */}
      <AddEmploye
        open={openModal}
        closeModal={handleCloseModal}
      />
    </>
  )
}

export default ListEmployee