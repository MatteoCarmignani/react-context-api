import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from './layout/DefaultLayout';

 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Error404 from './pages/Error404';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/product" >
                        <Route index element={<ProductPage />} />
                        <Route path=":id" element={<ProductDetailPage />} />
                    </Route >
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
