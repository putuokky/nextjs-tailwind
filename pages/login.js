import React from 'react'
import Guest from '../layouts/Guest'

export default function login() {
  return (
    <div>login</div>
  )
}

login.getLayout = page => <Guest children={page} />