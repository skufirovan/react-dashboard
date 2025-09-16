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
  ],

  getTitleByPath: pathname => {
    const item = navigationConfig.items.find(item => item.path === pathname);
    return item ? item.title : "Страница";
  },
};

export const navigationItems = navigationConfig.items;
export const getPageTitle = navigationConfig.getTitleByPath;
