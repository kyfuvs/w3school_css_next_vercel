const DD_color = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu bg-transparent" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item bg-transparent" href="#">Action</a></li>
                <li><a className="dropdown-item bg-transparent" href="#">Another action</a></li>
                <li><a className="dropdown-item bg-transparent" href="#">Something else here</a></li>
            </ul>
        </div>
    );
};

export default DD_color;
