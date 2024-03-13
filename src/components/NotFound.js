import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Wrong URL</h1>
        <h2><Link to='/portal/home'>Go back to home page</Link></h2>
        <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHN6OW56cmp3YzJmeHplaWtxdmdlcGlzYm91NHJsdmdzdnk1YmZ2ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nNtXAmGlGkYd8Xju92/giphy.gif' />
    </div>
  )
}

export default NotFound