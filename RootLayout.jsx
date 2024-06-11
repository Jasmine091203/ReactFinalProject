import { Outlet } from "react-router-dom";
// import MainNavigation from "./MainNavigation";
import MainNavLink from "./MainNavLink";
// 建立一個元件，用來顯示網站的主要版面配置
// 這個元件包含主要導覽列和用來顯示子路由內容的Outlet 元件
// Outlet 元件實際上是一個空的容器，保留位置來渲染子路由的內容
const RootLayout = () => {
    return (
        <div>
            <MainNavLink />
            <hr />
            <Outlet />
        </div>
    );
}
export default RootLayout;
