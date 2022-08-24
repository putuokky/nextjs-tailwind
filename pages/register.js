import Button from '../components/Button'
import Input from '../components/Input'
import Label from '../components/Label'
import Guest from '../layouts/Guest'
import Link from 'next/link'
import Checkbox from '../components/Checkbox'

export default function register() {
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
          <Checkbox name='remember' id='remember' label={'remember'} />
          <Link href='#'>
            <a>Forgot Password</a>
          </Link>
        </div>
        <Button>Login</Button>
      </form>
    </div>
  )
}
register.getLayout = page => <Guest header='Register' title='Register' children={page} />