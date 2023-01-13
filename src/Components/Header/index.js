import React from 'react';
import avatar from '../../Assets/img/avatar.jpg';

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h1 className='text-lg font-semibold'>Welcome to Hehe React</h1>
            <p className='text-sm'>it’s Monday, 21 Februari 2022</p>
        </div>
        <div className='flex items-center gap-3'>
            <img src={avatar}  className="w-8 h-8 rounded-full" alt="" />
            <span className='font-semibold text-sm'>Veza Adiloviana</span>
        </div>
    </div>
  )
}

export default Header