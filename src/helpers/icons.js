import {
	faSearch,
	faChevronDown,
	faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(faSearch, faChevronDown, faChevronUp);
};

export default Icons;
