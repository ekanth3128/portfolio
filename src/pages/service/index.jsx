import NavBar from '@/components/others/NavBar'
import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <>
      <NavBar />
      <Link href={'/service/pampa'} >pampa</Link>
    </>
  )
}

export default index