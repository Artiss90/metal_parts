import style from './ButtonFlag.module.css';

interface IProps{
  srcFlag: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  title: string,
  children?: JSX.Element[] | JSX.Element;
}

const ButtonFlag = ({ srcFlag, onClick, title, children }:IProps) => {
  return (
    <button className={style.btnFlag} onClick={onClick} title={title}>
      <img src={srcFlag} alt={title} className={style.iconFlag} />
      {children}
    </button>
  );
};

export default ButtonFlag;
