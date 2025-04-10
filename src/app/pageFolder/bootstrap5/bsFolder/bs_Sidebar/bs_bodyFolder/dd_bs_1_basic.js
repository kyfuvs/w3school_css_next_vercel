const DD_bs_1_basic = () => {
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
                BS-5 Basic
            </button>

            {/* Parent Dropdown Menu */}
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/pageFolder/bootstrap5/bsFolder/bs_1_Basic/bs_basic_1_home">BS-5 Home</a></li>
                <li><a className="dropdown-item" href="/pageFolder/bootstrap5/bsFolder/bs_1_Basic/bs_basic_2_get_start">BS-5 Get Started</a></li>
                <li><a className="dropdown-item" href="/pageFolder/bootstrap5/bsFolder/bs_1_Basic/bs_basic_3_container">BS-5 Container</a></li>
                <li><a className="dropdown-item" href="/pageFolder/bootstrap5/bsFolder/bs_1_Basic/bs_basic_4_grid">BS-5 Grid</a></li>
               
               
                
            </ul>
        </div>
    );
};

export default DD_bs_1_basic;
