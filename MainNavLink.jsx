import { NavLink } from "react-router-dom";
import classes from "./MainNavLink.module.css";
// 建立一個元件，用來顯示網站的主要導覽列
// 這個元件包含兩個連結，一個是首頁，一個是商品頁面
// 這兩個連結是用NavLink 元件來實作的
// className 屬性是用來設定當前連結的樣式
// classes 是一個物件，裡面包含了所有的樣式名稱
// 底下使用了header、list、active 三個樣式
// isActive 是一個三元運算子，用來判斷是否套用active 樣式
const MainNavLink = () => {
    return (
        <header className={classes.header}>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? classes.active : ''}>
                        首頁</NavLink>
                </li>
                <li>
                    <NavLink to="/university"
                        className={({ isActive }) =>
                            isActive ? classes.active : ''}>
                        科技大學</NavLink>
                </li>
                <li>
                    <NavLink to="/highSchool"
                        className={({ isActive }) =>
                            isActive ? classes.active : ''}>
                        高中</NavLink>
                </li>
            </ul>
        </header>
    );
}
export default MainNavLink;
