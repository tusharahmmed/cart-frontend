import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import {Layout, Row, Space, Spin} from "antd";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
