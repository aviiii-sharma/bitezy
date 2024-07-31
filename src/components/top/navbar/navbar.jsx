import React from 'react'

const navbar = () => {
  return (
    <div className="navbar flex justify-between w-full max-w-[70rem] items-center my-0 mx-auto text-[1.2rem] h-20 p-3 cursor-pointer leading-6">
        <div className="getapp">
            Get the App
        </div>
        <ul className="navbar-menu flex gap-7">
            <li>Investor Relations</li>
            <li>Add Restaurant</li>
            <li>Log in</li>
            <li>Sign up</li>
        </ul>
    </div>
  )
}

export default navbar