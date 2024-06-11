import { useParams } from "react-router-dom";
// 使用params 來取得路由參數
// useParams() 會回傳一個物件，裡面包含了所有的路由參數\
// params.productId 就是取得productId 的值
//useParams元件用來做：例如有好幾個商品，分為商品1、2、3，我用此元件來顯示這些商品裡的某個資料
const ProductDetail = () => {
    const params = useParams();
    return (
        <div>
            <h1>商品詳細資料</h1>
            <p>商品編號: {params.productId}</p>
        </div>
    );
}
export default ProductDetail;