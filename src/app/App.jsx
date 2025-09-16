import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import { CitizensPage, HomePage } from "../pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="citizens" element={<CitizensPage />} />
      </Route>
    </Routes>
  );
};

export default App;
