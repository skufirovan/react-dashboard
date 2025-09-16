import { useState } from "react";
import { citizens } from "@shared/mocks/index";
import { Pagination } from "@shared/ui/index";
import { CitizenCard } from "./CitizenCard/CitizenCard";
import s from "./CitizenList.module.scss";

const PAGE_SIZE = 10;

export const CitizenList = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(citizens.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const currentCitizens = citizens.slice(start, start + PAGE_SIZE);

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  return (
    <div className={s.container}>
      <div className={s.list}>
        {currentCitizens.map(citizen => (
          <CitizenCard key={citizen.id} citizen={citizen} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className={s.pagination}
        />
      )}
    </div>
  );
};
