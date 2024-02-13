import classNames from 'classnames';
import styles from './Icon.module.scss';
import { MaterialSymbolName } from './MaterialSymbolNames';

interface IconProps {
  className?: string;
  name: MaterialSymbolName | 'instagram' | 'linkedin';
  size?: number;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ size = 16, ...props }) => {
  const classes = classNames(
    styles.Icon,
    props.className,
  );

  if (['instagram', 'linkedin'].includes(props.name)) {
    return (
      <img
        src={`/static/icons/${props.name}.svg`}
        alt={props.name}
        width={size}
        height={size}
      />
    )
  }

  return (
    <i
      {...props}
      className={classes}
      translate="no" // Translation extensions translate icon names into text if this is not disabled
      style={{
        fontSize: `${size}px`,
      }}
      onClick={props.onClick}
    >
      {props.name}
    </i>
  );
};

export default Icon;