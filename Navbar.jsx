import { NavLink } from "react-router-dom";

function Nav (){

     const menu = [
    {
      title: "Home",
      path: "/",
      isActive: true,
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Shop Detail",
      path: "/shop-detail",
    },
    {
      title: "Pages",
      children: [
        { title: "Cart", path: "/cart" },
        { title: "Checkout", path: "/checkout" },
        { title: "Testimonial", path: "/testimonial" },
        { title: "404 Page", path: "/404" },
      ],
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

    return(
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                     {menu.map((item) => (
						<ItemMenu key={item.title} data={item} />))}          
                </div>
                <div className="d-flex m-3 me-0">
                    <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                    <a href="#" className="position-relative me-4 my-auto">
                        <i className="fa fa-shopping-bag fa-2x"></i>
                        <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{'top': '-5px', 'left': '15px', 'height': '20px', 'minWidth': '20px'}}>3</span>
                    </a>
                    <a href="#" className="my-auto">
                        <i className="fas fa-user fa-2x"></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Nav;

function ItemMenu({ data }) {
  if (data.children) {
    return (
      <div className="nav-item dropdown">
        <span
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          {data.title}
        </span>
        <div className="dropdown-menu m-0 bg-secondary rounded-0">
          {data.children.map((item) => (
            <NavLink key={item.title} to={item.path} className="dropdown-item">
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink
        to={data.path}
        className={({ isActive }) =>
          `nav-item nav-link ${isActive ? "active" : ""}`
        }
      >
        {data.title}
      </NavLink>
    );
  }
}
