import React from 'react'
import Icons from '../../helpers/icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Icons()

function CartButton({ className, icon, onClick }) {
  return (
    <a onClick={onClick} className={`${className} cart-button`}>
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default CartButton
