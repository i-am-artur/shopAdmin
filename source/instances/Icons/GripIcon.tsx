import { IconDefinition, faGripHorizontal, faGripHorizontal, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface Props extends Omit<FontAwesomeIconProps, 'icon'> {
  icon?: IconDefinition;
}

export const GripIcon = (props: Props) => {
  return <FontAwesomeIcon icon={faGripHorizontal} {...props} />;
};
