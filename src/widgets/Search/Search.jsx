import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import s from "./Search.module.scss";

export const Search = ({ placeholder }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = useDebouncedCallback(term => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, 300);

  return (
    <div className={s.search}>
      <label htmlFor="search" className={s.label}>
        Search
      </label>
      <input
        id="search"
        className={s.input}
        placeholder={placeholder}
        onChange={e => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className={s.icon} />
    </div>
  );
};
