const DD_bs_2_forms = () => {
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
                BS-5 Forms
            </button>

            {/* Parent Dropdown Menu */}
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/pageFolder/bootstrap5/bsFolder/bs_1_Basic/bs_basic_1_home">BS-5 Home</a></li>
                <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_2_intro">CSS Intro</a></li>
                <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_3_Syntax">CSS Syntax</a></li>
                
               
                
            </ul>
        </div>
    );
};

export default DD_bs_2_forms;
