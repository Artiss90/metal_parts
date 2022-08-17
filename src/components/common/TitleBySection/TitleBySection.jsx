import style from './TitleBySection.module.css';
import sn from 'classnames';

function TitleBySection({ children, modify }) {
  return (
    <h2 className={sn(style.title, { [style.modify]: modify })}>{children}</h2>
  );
}

export default TitleBySection;
