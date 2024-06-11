import React from "react";
import { useLoaderData } from "react-router-dom";
import UniversityList from "./UniversityList";
const UniversityPage = () => {
    const universities = useLoaderData();
    return <UniversityList universities={universities} />;
}
export default UniversityPage;
export const UniversityLoader = async () => {
    const response = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/shanghai-world-university-ranking/records?limit=100");
    if (!response.ok) {
        return {
            isErrored: true,
            message: "取得資料發生錯誤...",
        }
    }
    else {
        const data = await response.json();
        return data.universities;
    }
};
