import style from './TitleBySection.module.css';

function TitleBySection({ children }) {
  return <h2 className={style.title}>{children}</h2>;
}

export default TitleBySection;
