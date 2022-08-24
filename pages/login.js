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
          <Label forInput='email'>Email</Label>
          <Input type='email' name='email' id='email' placeholder='john@domain.com' />
        </div>
        <div className='mb-6'>
          <Label forInput='password'>Password</Label>
          <Input name='password' id='password' />
        </div>
        <div className='flex justify-between mb-6'>
          <div>
            <input className='mr-3 accent-sky-400' type='checkbox' name='remember' id='remember' />
            <label htmlFor='remember'>Remember me</label>
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