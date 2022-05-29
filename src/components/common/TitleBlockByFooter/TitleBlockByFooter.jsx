import style from './TitleBlockByFooter.module.css';

function TitleBlockByFooter({ text }) {
  return <h3 className={style.title}>{text}</h3>;
}

export default TitleBlockByFooter;
