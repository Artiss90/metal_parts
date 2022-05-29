import style from './TitleBySection.module.css';

function TitleBySection({ children, inlineStyle }) {
  return (
    <h2 className={style.title} style={inlineStyle}>
      {children}
    </h2>
  );
}

export default TitleBySection;
