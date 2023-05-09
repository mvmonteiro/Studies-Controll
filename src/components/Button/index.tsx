import style from './Button.module.scss'

interface ButtonProps {
    texto?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children?: React.ReactNode; // 👈️ for demo purposes
  }

const Button = ( props: ButtonProps ) => {
    return (
        <button onClick={props.onClick} className={style.botao} type={props.type}>{props.children}</button>
    );
}

export default Button;