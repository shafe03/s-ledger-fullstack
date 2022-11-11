import "../style/main.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/"> S-LEDGER </Link>
          </div>
          <div className="nav-list">
            <Link to="sales" className="nav-link">
              Sales
            </Link>
            <Link to="collections" className="nav-link">
              Collections
            </Link>
            <Link to="purchases" className="nav-link">
              purchase
            </Link>
            <Link to="customers" className="nav-link">
              Customers
            </Link>
            <Link to="products" className="nav-link">
              Products
            </Link>
            <Link to="reports" className="nav-link">
              Reports
            </Link>
          </div>
          <div className="signup-login">
            <Link to="app_test" className="app">
              Test
            </Link>
            <Link to="login" className="login">
              Test 2
            </Link>
            <Link to="signup" className="signup">
              Logout
            </Link>
          </div>
          <div className="search">
            <input type="text" placeholder="Search.." />
          </div>
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </nav>
        {/* <!--End of navbar --> */}

        {/* <!-- menu --> */}
        <div className="menu">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
