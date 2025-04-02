import Toggler_bs_side_canvas from "./toggler_bs_side_canvas";
import Header_bs_side_canvas from "./header_bs_side_canvas";
import Body_bs_side_canvas from "./body_bs_side_canvas";

const BS_side_canvas=()=>{
    return(
        <div>
            <Toggler_bs_side_canvas/>
            <div className="offcanvas offcanvas-start custom-offcanvas bg-dark text-white" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div >
                    <Header_bs_side_canvas/>
                </div>

                <div className="offcanvas-body">
                   <Body_bs_side_canvas/>
                </div>
            </div>
        </div>
    )
}
export default BS_side_canvas;