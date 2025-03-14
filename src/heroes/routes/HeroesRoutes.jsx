import { NavBar } from "../../ui/components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, MarvelPage, SearchPage,HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero" element={<HeroPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
