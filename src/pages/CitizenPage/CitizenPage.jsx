import { useParams, useSearchParams } from "react-router-dom";
import { citizensService } from "@shared/api/index";
import { Tabs } from "@shared/ui/index";
import {
  CitizenInfo,
  CitizenEducation,
  CitizenWork,
  CitizenRelatives,
} from "./ui/index";

export const CitizenPage = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const citizenId = Number(id);
  const citizen = citizensService.getCitizenById(citizenId);

  if (!citizen) return <p>Гражданин не найден</p>;

  const tabs = [
    { id: "info", label: "Общая информация" },
    { id: "education", label: "Образование" },
    { id: "work", label: "Работа" },
    { id: "relatives", label: "Родственники" },
  ];

  const activeTab = searchParams.get("tab") || tabs[0].id;

  const handleTabChange = tabId => {
    setSearchParams({ tab: tabId });
  };

  return (
    <div>
      <Tabs tabs={tabs} value={activeTab} onChange={handleTabChange}>
        {activeTab => (
          <>
            {activeTab === "info" && <CitizenInfo citizen={citizen} />}
            {activeTab === "education" && (
              <CitizenEducation education={citizen.education} />
            )}
            {activeTab === "work" && (
              <CitizenWork experience={citizen.workExperience} />
            )}
            {activeTab === "relatives" && (
              <CitizenRelatives citizenId={citizenId} />
            )}
          </>
        )}
      </Tabs>
    </div>
  );
};
