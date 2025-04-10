const BS_basic_p_4_grid=()=>{
    return (
        <div>
            <p className="text-info">BS Grid Basic</p>
            <div className="row mx-2">
                <div className="col border py-3">.col</div>
                <div className="col border py-3">.col</div>
                <div className="col border py-3">.col</div>
            </div>

            <p className="text-info mt-4 mb-0 ">Responsive Columns</p>
            <div className="row mx-2">
                <div className="col-sm-3 border py-3">.col-sm-3</div>
                <div className="col-sm-3 border py-3">.col-sm-3</div>
                <div className="col-sm-3 border py-3">.col-sm-3</div>
                <div className="col-sm-3 border py-3">.col-sm-3</div>
            </div>
            
            <p className="text-info mt-4 mb-0 ">Two Unequal Responsive Columns</p>
            <div className="row mx-2">
                <div className="col-sm-4 border py-3">.col-sm-4</div>
                <div className="col-sm-8 border py-3">.col-sm-8</div>
            </div>
        </div>
    )
}
export default BS_basic_p_4_grid;