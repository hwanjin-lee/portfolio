import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const iconSelector = (icon) => {
    if (icon) {
        return <FontAwesomeIcon icon={icon} />;
    }
}
