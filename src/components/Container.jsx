import React from 'react'
import LoginForm from './LoginForm'

const Container = () => {
  return (
    <div className="max-w-lg mx-auto mt-36  bg-white p-8 rounded-xl shadow shadow-slate-300">
    <h1 className="text-4xl font-medium mb-2">Login</h1>
    <p className="text-slate-500 mb-14">Hi, Welcome back <span className='wave'>👋</span></p>

<LoginForm/>
 
</div>
  )
}

export default Container