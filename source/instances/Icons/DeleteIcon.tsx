import { IconDefinition, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface Props extends Omit<FontAwesomeIconProps, 'icon'> {
  icon?: IconDefinition;
}

export const DeleteIcon = (props: Props) => {
  return <FontAwesomeIcon icon={faTrash} {...props} />;
};
