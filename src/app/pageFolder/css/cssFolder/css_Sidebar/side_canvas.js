import Toggler_side_canvas from "./side_canvasFolder/toggler_side_canvas";
import Header_side_canvas from "./side_canvasFolder/header_side_canvas";
import Body_side_canvas from "./side_canvasFolder/body_side_canvas";

const Side_canvas = () => {
    return (
        <div>
            {/* Toggler_side_canvas btn */}
           <Toggler_side_canvas/>

            <div className="offcanvas offcanvas-start custom-offcanvas bg-dark text-white" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div >
                   <Header_side_canvas/>
                </div>

                <div className="offcanvas-body">
                   <Body_side_canvas/>
                </div>
            </div>
        </div>
    );
};

export default Side_canvas;
