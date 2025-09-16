import clsx from "clsx";
import { Button } from "../Button/Button";
import s from "./Pagination.module.scss";

export const Pagination = ({ page, totalPages, onPageChange, className }) => {
  return (
    <div className={clsx(s.pagination, className)}>
      <Button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Назад
      </Button>

      <span className={s.info}>
        Страница {page} из {totalPages}
      </span>

      <Button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Вперед
      </Button>
    </div>
  );
};
