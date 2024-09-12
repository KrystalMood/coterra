import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPages } from "@/pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={IndexPages} />
      </Routes>
    </BrowserRouter>
  );
};