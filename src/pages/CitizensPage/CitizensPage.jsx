import { useSearchParams } from "react-router-dom";
import { citizensService } from "@shared/api/index";
import { ITEMS_PER_CITIZENS_PAGE } from "@shared/config/constants";
import { CitizenList, Pagination, Search, Filters } from "@widgets/index";
import { parseFilters } from "./lib/utils";
import s from "./CitizensPage.module.scss";

export const CitizensPage = () => {
  const [searchParams] = useSearchParams();
  const filters = parseFilters(searchParams);
  const currentPage = Number(searchParams.get("page")) || 1;
  const { citizens, count } = citizensService.filterCitizens(
    filters,
    currentPage
  );
  const totalPages = Math.ceil(count / ITEMS_PER_CITIZENS_PAGE);

  return (
    <div className={s.citizensPage}>
      <div className={s.searchContainer}>
        <Search placeholder="Поиск..." />
        <Filters />
      </div>
      <CitizenList citizens={citizens} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};
