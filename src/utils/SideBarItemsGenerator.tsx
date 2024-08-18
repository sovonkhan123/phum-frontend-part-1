import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSideBarItems = {
    key: string;
    label: ReactNode;
    children?: TSideBarItems[]
  };

  type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
  };

export const SideBarItemsGenerator = (items: TUserPath[], role: string) => {
    const sideBarItems = items.reduce((acc: TSideBarItems[], item) => {
        if (item.path && item.name) {
          acc.push({
            key: item.name,
            label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
          });
        }
        if (item.children) {
          acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map((child) => ({
              key: child.name,
              label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
            })),
          });
        }
        return acc;
      }, []);
      return sideBarItems;
}