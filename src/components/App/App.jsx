import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const Catalogue = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const Camper = lazy(() => import("../../pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/catalog/:camperId" element={<Camper />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
}
