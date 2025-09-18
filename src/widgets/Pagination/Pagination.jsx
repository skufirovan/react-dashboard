import { useSearchParams, useLocation } from "react-router-dom";
import { PaginationNumber } from "./PaginationNumber/PaginationNumber";
import { PaginationArrow } from "./PaginationArrow/PaginationArrow";
import { generatePagination } from "./lib/utils";
import s from "./Pagination.module.scss";

export const Pagination = ({ totalPages }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(pageNumber) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${location.pathname}?${params.toString()}`;
  }

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className={s.pagination}>
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {allPages.map((page, index) => {
        let position;

        if (index === 0) position = "first";
        if (index === allPages.length - 1) position = "last";
        if (allPages.length === 1) position = "single";
        if (page === "...") position = "middle";

        return (
          <PaginationNumber
            key={`${page}-${index}`}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
};
