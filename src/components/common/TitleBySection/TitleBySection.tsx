import style from './TitleBySection.module.css';
import sn from 'classnames';

interface IProps {
  children: JSX.Element[] | JSX.Element,
  modify?: boolean
}

function TitleBySection({ children, modify }:IProps) {
  return (
    <h2 className={sn(style.title, { [style.modify]: modify })}>{children}</h2>
  );
}

export default TitleBySection;
