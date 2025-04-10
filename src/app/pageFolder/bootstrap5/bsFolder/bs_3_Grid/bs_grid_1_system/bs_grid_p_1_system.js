const BS_grid_p_1_system = () => {
    const Box = ({ col_width }) => {
        return (
            <div className={`col-${col_width} border d-flex align-items-center justify-content-center`}>
                <p>span-{col_width}</p> 
            </div>
        );
    };
    

    const Row1 = () => {
        return (
            <div>
                <div className="row flex-nowrap overflow-auto mx-2" style={{ height: "10vh" }}>
                    {[...Array(12)].map((_, i) => (
                        <Box key={i} col_width={1} />
                    ))}
                </div>
            </div>
        );
    };

 
    const Row2=()=>{
        return(
            <div>
               <div className="row flex-nowrap overflow-auto mx-2" style={{ height: "10vh" }}>
                    <Box col_width={4} />
                    <Box col_width={4} />
                    <Box col_width={4} />
                </div>
            </div>
        )
    }

    const Row3=()=>{
        return(
            <div>
               <div className="row flex-nowrap overflow-auto mx-2" style={{ height: "10vh" }}>
                    <Box col_width={4} />
                    <Box col_width={8} />
                </div>
            </div>
        )
    }

    const Row4=()=>{
        return(
            <div>
               <div className="row flex-nowrap overflow-auto mx-2" style={{ height: "10vh" }}>
                    <Box col_width={6} />
                    <Box col_width={6} />
                </div>
            </div>
        )
    }

    const Row5=()=>{
        return(
            <div>
               <div className="row flex-nowrap overflow-auto mx-2" style={{ height: "10vh" }}>
                    <Box col_width={12} />
                </div>
            </div>
        )
    }

    return (
        <div>
            <p className="text-info">BS-5 Grid System</p>
            <Row1 />
            <Row2/>
            <Row3/>
            <Row4/>
            <Row5/>
        </div>
    );
};

export default BS_grid_p_1_system;
