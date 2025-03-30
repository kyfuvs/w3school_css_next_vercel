import Css_sidebar from "../css_sidebar";
import CSS_p_Home from "./css_p_home";

const CSS_Home=()=>{
    return (
        // <div className="container-fluid">
           <div>
            <div className="row">
                {/* <div className="col-2 col-sm-4 bg-dark border-top"> */}
                <div className="col-2 bg-dark border-top">
                    <Css_sidebar/>
                </div>
                {/* <div className="col-10 col-sm-6"> */}
                <div className="col-10">
                    <CSS_p_Home/>
                </div>
            </div>
        </div>
    
    );
};
export default CSS_Home;