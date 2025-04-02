const BS_grid_p_1_system = () => {
    const Row1 = () => {
        return (
            <div>
                <div className="row flex-nowrap overflow-auto">
                    <div className="col border text-center">col-1</div>
                    <div className="col border text-center">col-2</div>
                    <div className="col border text-center">col-3</div>
                    <div className="col border text-center">col-4</div>
                    <div className="col border text-center">col-5</div>
                    <div className="col border text-center">col-6</div>
                    <div className="col border text-center">col-7</div>
                    <div className="col border text-center">col-8</div>
                    <div className="col border text-center">col-9</div>
                    <div className="col border text-center">col-10</div>
                    <div className="col border text-center">col-11</div>
                    <div className="col border text-center">col-12</div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <p className="text-info">BS-5 Grid System</p>
            <Row1 />
        </div>
    );
};

export default BS_grid_p_1_system;
