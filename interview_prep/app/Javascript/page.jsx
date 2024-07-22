import { Counter } from '@/componets/Js/Closure'
import React from 'react'

const Page = () => {
  const Countme = Counter()
  console.log(Countme.GetValue())
  Countme.increment()
  Countme.increment()
  console.log(Countme.GetValue())

  return <div></div>
}

export default Page
