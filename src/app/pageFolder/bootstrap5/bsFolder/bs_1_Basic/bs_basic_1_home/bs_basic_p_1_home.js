const BS_basic_p_1_home=()=>{
    return (
        <div className="mt-2">
            {/* <p className="text-info">BS-5 Home</p> */}

            <div className="container-fluid bg-opacity-50 p-2 bg-secondary text-white text-center">
                <h4>BS-5 Home</h4> 
                <p className="text-warning fw-bold">container-fluid</p>
            </div>

            <div className="container mt-3">
                <div className=" p-1 bg-secondary bg-opacity-70 text-center">
                    <p className="text-warning fw-bold">container</p>
                </div>
                <div className="row mx-auto">
                    <div className="col-sm-4 border">
                        <h3>Column 1</h3>
                        <p className="text-danger">col-sm-4</p>
                        <p>Some text...</p>
                    </div>
                    <div className="col-sm-4 border">
                        <h3>Column 2</h3>
                        <p className="text-danger">col-sm-4</p>
                        <p>Some text...</p>
                    </div>
                    <div className="col-sm-4 border">
                        <h3>Column 3</h3>
                        <p className="text-danger">col-sm-4</p>
                        <p>Some text...</p>
                    </div>
                </div>

                <div className="row mx-auto">
                    <div className="col-4 border">
                        <h3>Column 1</h3>
                        <p className="text-danger">col-4</p>
                        <p>Some text...</p>
                    </div>
                    <div className="col-4 border">
                        <h3>Column 2</h3>
                        <p className="text-danger">col-4</p>
                        <p>Some text...</p>
                    </div>
                    <div className="col-4 border">
                        <h3>Column 3</h3>
                        <p className="text-danger">col-4</p>
                        <p>Some text...</p>
                    </div>
                </div>

            </div>
  
        </div>
    );
};
export default BS_basic_p_1_home;