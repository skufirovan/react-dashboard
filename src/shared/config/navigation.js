import { match } from "path-to-regexp";

export const navigationConfig = {
  items: [
    {
      id: "home",
      path: "/",
      icon: "🏠",
      label: "Главная",
      title: "Главная страница",
    },
    {
      id: "citizens",
      path: "/citizens",
      icon: "📂",
      label: "Картотека",
      title: "Картотека граждан",
    },
    {
      id: "citizen-detail",
      path: "/citizens/:id",
      title: "Профиль гражданина",
    },
  ],

  getTitleByPath: pathname => {
    for (const item of navigationConfig.items) {
      const matcher = match(item.path, { decode: decodeURIComponent });
      const result = matcher(pathname);
      if (result) return item.title;
    }

    return "Страница";
  },

  getSidebarItems: () => {
    return navigationConfig.items.filter(item => item.label && item.icon);
  },
};

export const sidebarItems = navigationConfig.getSidebarItems;
export const getPageTitle = navigationConfig.getTitleByPath;
