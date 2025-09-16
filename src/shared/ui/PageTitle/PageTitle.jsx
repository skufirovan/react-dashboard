import { useLocation } from "react-router-dom";
import { getPageTitle } from "@shared/config/index";
import s from "./PageTitle.module.scss";

export const PageTitle = () => {
  const location = useLocation();
  const title = getPageTitle(location.pathname);

  return <h1 className={s.title}>{title}</h1>;
};
