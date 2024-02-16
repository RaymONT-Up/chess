import { RouteProps } from "react-router-dom";
import { MainPage } from "src/pages/MainPage";
import { NotFoundPage } from "src/pages/NotFoundPage";

export type AppRoutesProps = RouteProps;

export enum AppRoutes {
  MAIN = "main",

  NOT_FOUND_PAGE = "not_found_page",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",

  [AppRoutes.NOT_FOUND_PAGE]: "/*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },


  [AppRoutes.NOT_FOUND_PAGE]: {
    path: RoutePath.not_found_page,
    element: <NotFoundPage />,
  },
};

type MyCreateRouteType = {
  [key in AppRoutes]: () => string;
};

export const MyCreateRoute: MyCreateRouteType = {
  [AppRoutes.MAIN]: () => RoutePath.main,

  [AppRoutes.NOT_FOUND_PAGE]: () => RoutePath.not_found_page,
};
