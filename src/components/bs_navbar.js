// import Menu_brand from '@/components/menuFolder/Menu_brand';
// import Menu_toggle from '@/components/menuFolder/Menu_toggle';
// import Menu_home from '@/components/menuFolder/Menu_home';
// import Menu_create from '@/components/menuFolder/Menu_create';
// import Menu_push from '@/components/menuFolder/Menu_push'
import Menu_brand from '@/components/menuFolder/menu_brand'
import Menu_toggle from '@/components/menuFolder/menu_toggle'
import Menu_home from '@/components/menuFolder/menu_home'
import Menu_css from '@/components/menuFolder/menu_css'


const BS_navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Menu_brand/>
        <Menu_toggle/>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"><Menu_home/></li>
            <li className="nav-item"><Menu_css/></li>
            {/* <li className="nav-item"><Menu_push/></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default BS_navbar;
