import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { navigationItems as items } from "@shared/config/index";
import s from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <div className={s.logo}>Dashboard</div>
      <nav className={s.nav}>
        {items.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => clsx(s.navItem, isActive && s.active)}
          >
            <span className={s.icon}>{item.icon}</span>
            <span className={s.label}>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
