import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from "./MainNavLink.module.css";

const RouterHighSchool = () => {
    const [highSchools, setHighSchools] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-public-schools/records?limit=100&refine=level%3A%22HIGH%22');
            const data = await response.json();
            console.log('Parsed JSON:', data); // 打印解析後的JSON數據
            if (data.results && data.results.length > 0) {
                const sortedData = data.results.sort((a, b) => {
                    const nameA = a.university_name ? a.university_name : '';
                    const nameB = b.university_name ? b.university_name : '';
                    return nameA.localeCompare(nameB);
                });
                setHighSchools(sortedData);
            } else {
                setError('數據格式不正確，缺少 world_rank_int 屬性');
            }
        } catch (fetchError) {
            console.error('Error fetching the university rankings:', fetchError);
            setError('Failed to fetch data. See console for more details.');
        }
    };

    return (
        <div>

            <h1>高中列表</h1>
            <iframe title="US Public Schools Table" src="https://public.opendatasoft.com/explore/embed/dataset/us-public-schools/table/?refine.level=HIGH&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6InVzLXB1YmxpYy1zY2hvb2xzIiwib3B0aW9ucyI6eyJyZWZpbmUubGV2ZWwiOiJISUdIIn19LCJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjRkY1MTVBIn1dLCJ4QXhpcyI6ImNpdHkiLCJtYXhwb2ludHMiOjUwLCJzb3J0IjoiIn1dLCJ0aW1lc2NhbGUiOiIiLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D&location=6,-32.63629,-49.40185&basemap=jawg.light&static=false&datasetcard=false"
                width="100%" height="400" frameborder="0"></iframe>

            <h2>高中區域分布</h2>
            <iframe title="US Public Schools Map" src="https://public.opendatasoft.com/explore/embed/dataset/us-public-schools/map/?refine.level=HIGH&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6InVzLXB1YmxpYy1zY2hvb2xzIiwib3B0aW9ucyI6eyJyZWZpbmUubGV2ZWwiOiJISUdIIn19LCJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjRkY1MTVBIn1dLCJ4QXhpcyI6ImNpdHkiLCJtYXhwb2ludHMiOjUwLCJzb3J0IjoiIn1dLCJ0aW1lc2NhbGUiOiIiLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D&location=2,39.77032,10.46182&basemap=jawg.light&static=false&datasetcard=false&scrollWheelZoom=true"
                width="100%" height="400" frameborder="0"></iframe>

            <h1>高中資訊列表</h1>
            {error && <p>{error}</p>}
            <ul className={classes.grid}>
                {highSchools.length > 0 ? (
                    highSchools.map((highSchool, index) => (
                        <li key={index} className={classes.item}>
                            <Link to={`/highSchool/${highSchool.name}`}>
                                {highSchool.name} - {highSchool.country} - {highSchool.city}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li>暫無數據</li>
                )}
            </ul>
        </div>
    );
};

export default RouterHighSchool;