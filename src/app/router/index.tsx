import { CircularProgress } from "@mui/material";
import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "src/shared/config/RouteConfig";

export const AppRouter: FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
