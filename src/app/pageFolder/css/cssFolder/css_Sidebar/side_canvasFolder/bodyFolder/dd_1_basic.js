const DD_1_basic=()=>{
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                CSS Basic
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item " href="#">Basic 1</a></li>
                <li><a className="dropdown-item" href="#">Basic 2</a></li>
                <li><a className="dropdown-item" href="#">Basic 3</a></li>
            </ul>
        </div>
    );
};
export default DD_1_basic;