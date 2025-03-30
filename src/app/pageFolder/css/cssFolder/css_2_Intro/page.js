import Css_sidebar from "../css_sidebar";
import CSS_p_Intro from "./css_p_intro";

const CSS_Intro=()=>{
    return (
        <div >
            <div className="row">
                <div className="col-2 bg-dark border-top">
                    <Css_sidebar/>
                </div>
                <div className="col-10">
                    <CSS_p_Intro/>
                </div>
            </div>
            
        </div>
    );
};
export default CSS_Intro;