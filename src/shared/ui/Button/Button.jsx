import clsx from "clsx";
import s from "./Button.module.scss";

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={clsx(s.button, className)} {...props}>
      {children}
    </button>
  );
};
