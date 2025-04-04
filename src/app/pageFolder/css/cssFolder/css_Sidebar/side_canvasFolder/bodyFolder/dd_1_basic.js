import DD_7_colors from "./dd_1_basicFolder/dd_7_colors";
import DD_8_bg from "./dd_1_basicFolder/dd_8_bg";

const DD_1_basic = () => {
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
                CSS Basic
            </button>

            {/* Parent Dropdown Menu */}
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_1_home">CSS Home</a></li>
                <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_2_intro">CSS Intro</a></li>
                <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_3_Syntax">CSS Syntax</a></li>
                
                <DD_7_colors />
                <DD_8_bg/>
                
            </ul>
        </div>
    );
};

export default DD_1_basic;
