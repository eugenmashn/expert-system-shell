import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { DetailLocation } from "../components/Location/components/DetailLocation";
import { LocationComponent } from "../components/Location/LocationComponent";
import { DetailRule } from "../components/Rule/components/RuleDetailComponents";
import { RuleComponent } from "../components/Rule/RuleComponent";

export enum EnumTypePage{
  Edit = 'edit',
  Create = 'create'
}

export const routes: RouteObject[] = [
  {
    element: <RuleComponent />,
    path: "/rule",
    children:[
      {
        element:<DetailRule/>,
        path: `:typePage`
      },
      {
        element:<DetailRule/>,
        path: `:typePage/:id`
      }
    ]
  },
  {
    path: "",
    element: <Navigate to="/location" />
  },
  {
    element: <LocationComponent />,
    path: "/location",
    children:[
      {
        element:<DetailLocation/>,
        path: `:typePage`
      },
      {
        element:<DetailLocation/>,
        path: `:typePage/:id`
      },
    ]
  },
];



export function RouteComponent(): React.ReactElement<any,string | React.JSXElementConstructor<any>> | null {
  const routesComponent = useRoutes(routes);
  return routesComponent;
}
