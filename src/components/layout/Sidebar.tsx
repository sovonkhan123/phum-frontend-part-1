import { SideBarItemsGenerator } from "../../utils/SideBarItemsGenerator";
import { adminPath } from "../../routes/AdminRoutes";
import { Layout, Menu } from "antd";
import { facultyPath } from "../../routes/FacultyRoutes";
import { studentPath } from "../../routes/StudentRoutes";
import { useAppSelector } from "../../redux/features/hooks";
import { useCurrentUser } from "../../redux/features/auth/AuthSlice";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(useCurrentUser);
  let sideBarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      sideBarItems = SideBarItemsGenerator(adminPath, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = SideBarItemsGenerator(facultyPath, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarItems = SideBarItemsGenerator(studentPath, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
