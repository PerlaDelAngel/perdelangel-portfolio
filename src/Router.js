import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/ScreenComponents/Home";

function AppRouter () {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home/>}
            />

            <Route
                path="*"
                element={<Navigate to="/" replace/>}
            />
        </Routes>
    );
}

export default AppRouter;