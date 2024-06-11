import { Link } from 'react-router-dom';
import React from 'react';
import { useLoaderData } from "react-router-dom"
import ResultsList from './ResultsList';
// import ResultsList2 from './ResultsList2';
const RouterHome = () => {
    const results = useLoaderData();
    // const results2 = useLoaderData();
    return (

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3><Link to="/university">大學資訊頁面</Link></h3>
              <h2>世界大學各國占比</h2>
          </div>
                  ,<ResultsList results={results} />
      );
    // return <ResultsList2 results2={results2} />;
}
export default RouterHome;
export const  ResultsLoader = async () => {
    
    const response = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/shanghai-world-university-ranking/records?limit=100 ");

    if (!response.ok) {
        return { isErrored: true, message: "取得資料發生錯誤...", }
    } else {
        
        const data = await response.json();
        return data.results;
    }
};