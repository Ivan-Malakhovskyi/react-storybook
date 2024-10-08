import { FC } from "react";
import styles from "./InputText.module.css";

export interface IInputTextProps {
  size: "sm" | "md" | "lg";
}

const AppInputText: FC<IInputTextProps> = ({ size = "sm", ...props }) => {
  return (
    <input className={`${styles["input-text"]} ${styles[size]}`} {...props} />
  );
};

export default AppInputText;
