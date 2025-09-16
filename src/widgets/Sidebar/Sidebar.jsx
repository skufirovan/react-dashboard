import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Sidebar.module.scss";

export const Sidebar = () => {
  const items = [
    { id: "home", label: "Главная", icon: "🏠", path: "/" },
    { id: "citizens", label: "Картотека", icon: "📂", path: "/citizens" },
  ];

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
