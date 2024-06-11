import React from 'react';
import { useLoaderData, json } from "react-router-dom";
import UniversityItem from "./UniversityItem";

const UniversityDetail = () => {
    const university = useLoaderData();
    return <UniversityItem university={university} />;
};


export default UniversityDetail;

export const UniversityDetailLoader = async ({ params }) => {
    
    const id = params.universityName;
 
    const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/shanghai-world-university-ranking/records?limit=100&refine=year%3A%222018%22&refine=world_rank%3A%22${id}%22`);

    if (!response.ok) {
        throw json({ message: "取得資料發生錯誤..." },
            { status: response.status }
        );
    } else {

        const data = await response.json();
        return data;
    }
}
