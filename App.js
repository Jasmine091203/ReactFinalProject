import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterHome, {ResultsLoader} from './components/RouterHome';
import UniversityDetail,{UniversityDetailLoader} from './components/UniversityDetail';
import UniversityPage, {UniversityLoader} from './components/UniversityPage';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';
// import UniversityDetail from './components/UniversityDetail'; 
// import RouterUniversity from './components/RouterUniversity';
import HighSchoolDetail from './components/HighSchoolDetail';
import RouterHighSchool from './components/RouterHighSchool';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <RouterHome /> ,loader: ResultsLoader},
            {path: '/university', element: <UniversityPage />,loader:UniversityLoader},
            {path: '/university/:universityName',element: <UniversityDetail />,loader: UniversityDetailLoader},
            // { path: '/university', element: <RouterUniversity /> },
            { path: '/highSchool', element: <RouterHighSchool /> },
            // { path: '/university/:universityName', element: <UniversityDetail /> },
            { path: '/highSchool/:highSchoolId', element: <HighSchoolDetail /> },
            { path: '/', element: <RouterHome /> ,loader: ResultsLoader},

        ]
    }
]);
function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
            {/* react-router-dom 套件 裡面的 元件'RouterProvider'
            並沒有實際寫到它的程式碼 /}
            {/ 指引到對應的頁面的元件是RouterProvider，它的屬性是router={} */}
        </div>
    );
}
export default App;