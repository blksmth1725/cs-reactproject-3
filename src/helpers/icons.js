import {
	faSearch,
	faChevronDown,
	faChevronUp,
	faTimes
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(faSearch, faChevronDown, faChevronUp, faTimes);
};

export default Icons;
