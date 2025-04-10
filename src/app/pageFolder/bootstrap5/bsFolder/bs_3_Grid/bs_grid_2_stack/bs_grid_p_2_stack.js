import Tab_1_stacked_to_horizontal from "./stackTabs/tab_1_stacked_to_horizontal"
import Tab_2_RWD from "./stackTabs/tab_2_RWD"

const BS_grid_p_2_stack=()=>{
    return(
        <div className="container mt-1">
              {/* Nav Tab */}
                <ul className="nav nav-tabs" id="myTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                    {/* <a className="nav-link active" id="home-tab" data-bs-toggle="tab" 
                       href="#home" role="tab" aria-controls="home" aria-selected="true"> */}
                    <a className="nav-link active" id="1-tab" data-bs-toggle="tab" 
                       href="#tab-1" role="tab" aria-controls="1" aria-selected="true">
                        S2H
                    </a>
                    </li>
                    <li className="nav-item" role="presentation">
                    <a className="nav-link" id="2-tab" data-bs-toggle="tab" 
                       href="#tab-2" role="tab" aria-controls="2" aria-selected="false">
                        RWD
                    </a>
                    </li>
                    <li className="nav-item" role="presentation">
                    <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                    </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content mt-3" id="myTabContent">
                    {/* <div className="tab-pane fade show active" 
                         id="home" role="tabpanel" aria-labelledby="home-tab"> */}
                    <div className="tab-pane fade show active" 
                         id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                      <h5 className="text-warning">Stacked-to-horizontal</h5>
                      <Tab_1_stacked_to_horizontal/>
                    </div>
                    <div className="tab-pane fade" 
                         id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                      <h5 className="text-warning">Responsive Container</h5>
                      <Tab_2_RWD/>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <h5>Contact Tab</h5>
                    <p>Content for the contact tab goes here.</p>
                    </div>
                </div>
        </div>
    )
}
export default BS_grid_p_2_stack