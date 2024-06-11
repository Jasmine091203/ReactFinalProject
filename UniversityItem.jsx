import { Link } from 'react-router-dom';
const UniversityItem = ({ University }) => {
    return (
        <div>
            <h2>{University.university_name}</h2>
            {/* <img width={100} src={product.images[0]} alt='' /> */}
            <p>排名: {University.national_rank}</p>
            <p>國家: {University.country}</p>
            <hr />
            <Link to='..' relative='path'>上一頁</Link>
        </div>
    );
}
export default UniversityItem;