'use client'
import { useState, useEffect } from "react";
import Header_side_canvas from "./side_canvasFolder/header_side_canvas";

const Side_canvas = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const offcanvasElement = document.getElementById("offcanvasExample");

        if (offcanvasElement) {
            offcanvasElement.addEventListener("shown.bs.offcanvas", () => setIsOpen(true));
            offcanvasElement.addEventListener("hidden.bs.offcanvas", () => setIsOpen(false));
        }

        return () => {
            if (offcanvasElement) {
                offcanvasElement.removeEventListener("shown.bs.offcanvas", () => setIsOpen(true));
                offcanvasElement.removeEventListener("hidden.bs.offcanvas", () => setIsOpen(false));
            }
        };
    }, []);

    return (
        <div>
            {/* side_canvas btn */}
            <button 
                className="btn btn-primary bg-transparent border-0" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasExample" 
                aria-controls="offcanvasExample"
            >
                <i className={`bi ${isOpen ? "bi-chevron-left" : "bi-chevron-right"}`}></i> 
            </button>

            <div className="offcanvas offcanvas-start custom-offcanvas bg-dark text-white" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <Header_side_canvas/>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Side_canvas;
