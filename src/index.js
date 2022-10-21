import { render } from "@testing-library/react";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Like from "./pages/liked";

const App = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/liked" element={<Like/>}></Route>
                    <Route path="/movie/:id" element={<Movie/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

render(<App/>, document.getElementById("root"));