import React from 'react'
import { Icon } from '@iconify/react';
import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AddEmploye = ({ closeModal, open, action }) => {
  return (
    <div>
      <Modal open={open} onClose={closeModal}>
        <Box sx={style} className='max-w-xl w-full rounded-md'>
          <div className='flex justify-between mb-6'>
            <h1 className='font-bold'>Add Employee</h1>
            <button onClick={closeModal}>
              <Icon icon="eva:close-fill" className='w-7 h-7' />
            </button>
          </div>
          <div>
            <form className='max-h-80 overflow-y-auto'>
              <div className="mb-3">
                <label for="fName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                <input type="text" id="fName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className="mb-3">
                <label for="lName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                <input type="text" id="lName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className="mb-3">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className="mb-3">
                <label for="avatar" className="block mb-2 text-sm font-medium text-gray-900">Foto</label>
                <input type="file" id="avatar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
            </form>
            {/* Buttton */}
            <div className='flex justify-end gap-5 mt-10'>
              <button onClick={closeModal} className='border px-10 py-2 text-sm rounded-md text-SubGrayD5 border-SubGrayD5'>Cancel</button>
              <button onClick={action} className='px-10 py-2 text-sm rounded-md text-[#F5F5F5] bg-blue-500'>Add</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default AddEmploye