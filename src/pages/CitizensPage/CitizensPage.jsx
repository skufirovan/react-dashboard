import { useSearchParams } from "react-router-dom";
import { citizens } from "@shared/mocks/index";
import { ITEMS_PER_CITIZENS_PAGE } from "@shared/config/constants";
import { CitizenList, Pagination, Search } from "@widgets/index";
import s from "./CitizensPage.module.scss";

export const CitizensPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(citizens.length / ITEMS_PER_CITIZENS_PAGE);

  return (
    <div className={s.citizensPage}>
      <Search placeholder="Поиск..." />
      <CitizenList query={query} currentPage={currentPage} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};
