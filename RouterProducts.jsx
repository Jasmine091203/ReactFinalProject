import { Link } from "react-router-dom";
import classes from "./MainNavLink.module.css";
const products = [
    { id: 'p1', title: "Product ---1" },
    { id: 'p2', title: "Product ---2" },
    { id: 'p3', title: "Product ---3" }
];
const RouterProducts = () => {
    return (
        <div>
            <h1>商品列表</h1>
            <ul className={classes.list}>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>);
};
export default RouterProducts;
//Shift + Alt + F自動格式化快捷鍵