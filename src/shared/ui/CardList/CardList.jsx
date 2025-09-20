import clsx from "clsx";
import s from "./CardList.module.scss";

export const CardList = ({
  items,
  renderItem,
  emptyMessage = "Данные не указаны",
  className = "",
}) => {
  if (items.length === 0) {
    return <p className={s.empty}>{emptyMessage}</p>;
  }

  return (
    <div className={clsx(s.list, className)}>
      {items.map((item, i) => (
        <div key={i} className={s.item}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};
