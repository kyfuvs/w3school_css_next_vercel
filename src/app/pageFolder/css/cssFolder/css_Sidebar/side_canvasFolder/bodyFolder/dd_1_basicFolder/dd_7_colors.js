const DD_7_colors = () => {

    const Color_subMenu = () => {
        return (
            <div>
                <ul className="dropdown-menu "> {/* Added bg-dark and text-white here */}
                    <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_7_colors/basic_7_colorsFolder/basic_7_colors_1_colors">Colors</a></li>
                    <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_2_intro">CSS Intro</a></li>
                    <li><a className="dropdown-item" href="/pageFolder/css/cssFolder/css_1_Basic/basic_3_Syntax">CSS Syntax</a></li>
                </ul>
            </div>
        );
    };

    return (
        <div>
            {/* <li className="dropend"> */}
            <li className="dropdown ">
                <a className="dropdown-item bg-transparent bg-dark dropdown-toggle text-white" 
                   data-bs-toggle="dropdown" 
                   href="#">CSS Color</a>
                <Color_subMenu />
            </li>
        </div>
    );
};

export default DD_7_colors;
