import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Preview } from "../pages/Preview";
import { NewMovie } from "../pages/NewMovie";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/preview/:id" element={<Preview />}/>
            <Route path="/new" element={<NewMovie />}/>
        </Routes>
    );
}