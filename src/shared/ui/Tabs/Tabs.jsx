import clsx from "clsx";
import s from "./Tabs.module.scss";

export const Tabs = ({ tabs, value, onChange, children }) => {
  return (
    <div className={s.tabs}>
      <div className={s.tabList} role="tablist">
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={value === tab.id}
            className={clsx(s.tab, value === tab.id && s.active)}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {children(value)}
    </div>
  );
};
