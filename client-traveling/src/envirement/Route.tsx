import { RouteObject, useRoutes } from "react-router-dom";
import { LocationComponent } from "../components/Location/LocationComponent";
import {RuleComponent} from '../components/Rule/RuleComponent';


export const routes: RouteObject[]  = [
    {
      element: <RuleComponent/>,
      path: "/rule",
    },
    {
      element: <LocationComponent />,
      path: "/",
    },
  ];

  export function RouteComponent(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {
    const routesComponent = useRoutes(routes);
    return routesComponent;
  };