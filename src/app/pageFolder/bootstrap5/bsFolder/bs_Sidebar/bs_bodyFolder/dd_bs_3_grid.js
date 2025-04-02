const DD_bs_3_grid = () => {
    return (
        <div className="dropdown">
            {/* Parent Dropdown Toggle */}
            <button 
                className="btn btn-secondary dropdown-toggle bg-transparent border-0" 
                type="button" 
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                BS-5 Grid
            </button>

            {/* Parent Dropdown Menu */}
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/pageFolder/bootstrap5/bsFolder/bs_3_Grid/bs_grid_1_system">BS-5 Grid System</a></li>
                <li><a className="dropdown-item" href="/pageFolder/bootstrap5/bsFolder/bs_3_Grid/bs_grid_2_stack">BS-5 Stacked/Horizontal</a></li>
                <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_3_Syntax">CSS Syntax</a></li>
                
               
                
            </ul>
        </div>
    );
};

export default DD_bs_3_grid;
