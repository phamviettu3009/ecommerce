"use client";

import React from "react";
import useAuth from "../hooks/useAuth";

function Sidebar() {
    const { handleSignOut } = useAuth();

    return (
        <div>
            <button onClick={handleSignOut}>sign out</button>
        </div>
    );
}

export default Sidebar;
