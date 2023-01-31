import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  text: string;
}

export const ButtonForm = (props: IButtonProps) => {
  const { className, text, type, disabled } = props;

  return (
    <button className={className} type={type} disabled={disabled}>
      {text}
    </button>
  );
};
