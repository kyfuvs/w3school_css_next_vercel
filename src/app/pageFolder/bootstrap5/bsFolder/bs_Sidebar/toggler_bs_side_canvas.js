'use client'
import { useState, useEffect } from "react";

const Toggler_bs_side_canvas = () => {
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

           
        </div>
    );
};

export default Toggler_bs_side_canvas;
