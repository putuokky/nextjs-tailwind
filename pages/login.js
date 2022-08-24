import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Label from '../components/Label'
import Guest from '../layouts/Guest'

export default function login() {
  return (
    <div>
      <form>
        <div className='mb-6'>
          <Label forInput='email' className='block mb-1 text-gray-700 capitalize'>Email</Label>
          <Input type='email' name='email' id='email' placeholder='john@domain.com' />
        </div>
        <div className='mb-6'>
          <Label forInput='password' className='block mb-1 text-gray-700 capitalize'>Password</Label>
          <Input name='password' id='password' />
        </div>
        <div className='flex justify-between mb-6'>
          <div>
            <input className='mr-3 accent-sky-400' type='checkbox' name='remember' id='remember' />
            <Label forInput='remember'>Remember me</Label>
          </div>
          <Link href='#'>
            <a>Forgot Password</a>
          </Link>
        </div>
        <Button>Login</Button>
      </form>
    </div>
  )
}

login.getLayout = page => <Guest header='Login' title='Login' children={page} />