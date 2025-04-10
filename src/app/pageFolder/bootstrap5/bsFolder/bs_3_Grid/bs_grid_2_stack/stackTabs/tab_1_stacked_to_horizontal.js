const Tab_1_stacked_to_horizontal=()=>{
    return(
        <div>
            {/* Title */}
            <p>The following example shows a simple "stacked-to-horizontal" two-column layout, meaning it will result in a 50%/50% split on all screens, except for extra small screens, which it will automatically stack (100%):</p>
            
            {/* Content Examples */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 bg-primary">
                    <p>col-sm-6 bg-primary</p>
                    </div>
                    <div className="col-sm-6 bg-dark">
                    <p>col-sm-6 bg-dark</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tab_1_stacked_to_horizontal;