import style from './ButtonFlag.module.css';

const ButtonFlag = ({ srcFlag, onClick, title, children }) => {
  return (
    <button className={style.btnFlag} onClick={onClick} title={title}>
      <img src={srcFlag} alt={title} className={style.iconFlag} />
      {children}
    </button>
  );
};

export default ButtonFlag;
