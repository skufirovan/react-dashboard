import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import { CitizenPage, CitizensPage, HomePage } from "../pages";
import "@shared/config/charts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="citizens" element={<CitizensPage />} />
        <Route path="citizens/:id" element={<CitizenPage />} />
      </Route>
    </Routes>
  );
};

export default App;
