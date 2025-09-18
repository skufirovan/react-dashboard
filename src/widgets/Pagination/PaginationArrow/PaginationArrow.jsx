import clsx from "clsx";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import s from "./PaginationArrow.module.scss";

export const PaginationArrow = ({ href, direction, isDisabled }) => {
  const className = clsx(s.arrow, {
    [s.disabled]: isDisabled,
    [s.enabled]: !isDisabled,
    [s.left]: direction === "left",
    [s.right]: direction === "right",
  });

  const icon =
    direction === "left" ? (
      <ArrowLeftIcon className={s.icon} />
    ) : (
      <ArrowRightIcon className={s.icon} />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} to={href}>
      {icon}
    </Link>
  );
};
