import {
  faSearch,
  faChevronDown,
  faChevronUp,
  faTimes,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Icons = () => {
  return library.add(
    faSearch,
    faChevronDown,
    faChevronUp,
    faTimes,
    faShoppingCart,
  )
}

export default Icons
