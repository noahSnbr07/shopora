'use client';

import React from "react";
import { ToastContainer } from "react-toastify";

interface _props {
    children: React.ReactNode;
}

export default function ReactToastProvider({ children }: _props) {

    return (
        <React.Fragment>
            <ToastContainer
                pauseOnHover
                position="top-center"
                autoClose={3000}
                theme="dark"
                hideProgressBar
            />
            {children}
        </React.Fragment>
    );
}