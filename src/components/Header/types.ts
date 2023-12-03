import { RouteEnum, RouteName } from "../../utils/paths";

const RouteTypes = [
  {
    name: RouteName.SIGN_IN,
    path: RouteEnum.SIGN_IN,
  },
  {
    name: RouteName.SIGN_UP,
    path: RouteEnum.SIGN_UP,
  },
  {
    name: RouteName.HOME,
    path: RouteEnum.HOME,
  },
  {
    name: RouteName.ACCOUNT,
    path: RouteEnum.HOME,
  },
  {
    name: RouteName.ORDERS,
    path: RouteEnum.HOME,
  },
];

export default RouteTypes;
