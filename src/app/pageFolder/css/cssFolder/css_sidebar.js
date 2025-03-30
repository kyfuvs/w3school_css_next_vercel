import DD_color from "./css_sidebarItem/dd_color";
const Css_sidebar=()=>{
    return(
        <div>
            <a className="nav-link" href="https://www.w3schools.com/css/default.asp" target="_blank">CSS Tutorial</a>
            <div>
                <a className="nav-link ms-3 me-2" href="/pageFolder/css/cssFolder/css_1_Home">CSS HOME</a>
                <a className="nav-link ms-3 me-2" href="/pageFolder/css/cssFolder/css_2_Intro">CSS Introduction</a>
                <a className="nav-link ms-3" href="/pageFolder/css/cssFolder/css_3_Syntax">CSS Syntax</a>
                {/* <a className="nav-link ms-3" href="/pageFolder/css">CSS Selectors</a>
                <a className="nav-link ms-3" href="/pageFolder/css">CSS How To</a>
                <a className="nav-link ms-3" href="/pageFolder/css">CSS Comments</a>
                <a className="nav-link" href="/pageFolder/css"><DD_color/></a> */}
            </div>
        </div>
    );

};
export default Css_sidebar;