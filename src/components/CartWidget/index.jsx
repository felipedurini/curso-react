import React from 'react'
import {ImCart} from 'react-icons/im'

const cartWidget = ({value}) => {
  return (
    <div>
    <ImCart size={18}/>
    <span>{value}</span>
    </div>
  )
}

export default cartWidget