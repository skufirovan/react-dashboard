import { useState } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { filtersConfig } from "@shared/config/filters";
import { Button } from "@shared/ui/index";
import s from "./Filters.module.scss";

export const Filters = () => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (value === null || value === "" || value === undefined) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return (
    <div className={s.filters}>
      <Button onClick={() => setOpen(!open)} className={s.button}>
        <FunnelIcon className={s.icon} />
      </Button>
      {open && (
        <div className={s.dropdown}>
          {Object.entries(filtersConfig).map(([key, config]) => {
            if (config.type === "range") {
              return (
                <div key={key} className={s.filter}>
                  <label className={s.filterLabel}>{config.label}</label>
                  <input
                    type="range"
                    className={s.filterInput}
                    min={config.min}
                    max={config.max}
                    step={config.step}
                    onChange={e =>
                      handleChange(key, `${e.target.value}-${config.max}`)
                    }
                  />
                </div>
              );
            }

            if (config.type === "boolean") {
              return (
                <div key={key} className={s.filterCheckboxWrapper}>
                  <label>
                    <input
                      type="checkbox"
                      checked={searchParams.get(key) === "true"}
                      onChange={e => handleChange(key, e.target.checked)}
                    />
                    {config.label}
                  </label>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
};
