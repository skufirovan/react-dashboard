import { Outlet } from "react-router-dom";
import { Sidebar } from "@widgets/index";
import { PageTitle } from "@shared/ui/index";
import s from "./AppLayout.module.scss";

const AppLayout = () => {
  return (
    <div className={s.layout}>
      <Sidebar />
      <main className={s.main}>
        <PageTitle />
        <div className={s.page}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
