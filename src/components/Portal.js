import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

const Portal = () => {
  return (
    <div className='portal'>
        <Topbar />
        <Outlet />
    </div>
  )
}

export default Portal