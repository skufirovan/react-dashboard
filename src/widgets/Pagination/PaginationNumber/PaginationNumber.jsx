import { Link } from "react-router-dom";
import clsx from "clsx";
import s from "./PaginationNumber.module.scss";

export const PaginationNumber = ({ page, href, isActive, position }) => {
  const className = clsx(s.number, {
    [s.first]: position === "first",
    [s.last]: position === "last",
    [s.single]: position === "single",
    [s.middle]: position === "middle",
    [s.active]: isActive,
    [s.inactive]: !isActive,
  });

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link to={href} className={className}>
      {page}
    </Link>
  );
};
