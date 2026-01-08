function Index() {
  const products = [
    {
      id: 1,
      name: "Banana",
      price: 4.99,
      image: "/images/banana.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
    },
    {
      id: 2,
      name: "Orange",
      price: 5.49,
      image: "/images/orange.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
    },
    {
      id: 3,
      name: "Raspberries",
      price: 6.99,
      image: "/images/raspberries.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
    },
    {
      id: 4,
      name: "Grapes",
      price: 4.79,
      image: "/images/grapes.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
    },
    {
      id: 5,
      name: "Apricots",
      price: 4.79,
      image: "/images/apricots.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
    },
    {
      id: 6,
      name: "Apple",
      price: 4.79,
      image: "/images/apple.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
    },
    {
      id: 7,
      name: "Strawberry",
      price: 4.79,
      image: "/images/strawberry.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
    },
    {
      id: 8,
      name: "Bread",
      price: 2.5,
      image: "/images/bread.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Bread",
    },
    {
      id: 9,
      name: "Chicken",
      price: 6.99,
      image: "/images/chicken.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Meat",
    },
    {
      id: 10,
      name: "pork ribs",
      price: 10.99,
      image: "/images/pork.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Meat",
    },
  ];
  const categories = ["All Products", "Vegetables", "Fruits", "Bread", "Meat"];

  return (
    <>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="container-fluid py-5 mb-5 hero-header">
              <div className="container py-5">
                <div className="row g-5 align-items-center">
                  <div className="col-md-12 col-lg-7">
                    <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                    <h1 className="mb-5 display-3 text-primary">
                      Organic Veggies & Fruits Foods
                    </h1>
                    <div className="position-relative mx-auto">
                      <input
                        className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                        type="number"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                        style={{ top: "0", right: "25%" }}
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-5">
                    <div
                      id="carouselId"
                      className="carousel slide position-relative"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active rounded">
                          <img
                            src="img/hero-img-1.png"
                            className="img-fluid w-100 h-100 bg-secondary rounded"
                            alt="First slide"
                          />
                          <a href="#" className="btn px-4 py-2 text-white rounded">
                            Fruites
                          </a>
                        </div>
                        <div className="carousel-item rounded">
                          <img
                            src="img/hero-img-2.jpg"
                            className="img-fluid w-100 h-100 rounded"
                            alt="Second slide"
                          />
                          <a href="#" className="btn px-4 py-2 text-white rounded">
                            Vesitables
                          </a>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid featurs py-5">
              <div className="container py-5">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="featurs-item text-center rounded bg-light p-4">
                      <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                        <i className="fas fa-car-side fa-3x text-white"></i>
                      </div>
                      <div className="featurs-content text-center">
                        <h5>Free Shipping</h5>
                        <p className="mb-0">Free on order over $300</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="featurs-item text-center rounded bg-light p-4">
                      <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                        <i className="fas fa-user-shield fa-3x text-white"></i>
                      </div>
                      <div className="featurs-content text-center">
                        <h5>Security Payment</h5>
                        <p className="mb-0">100% security payment</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="featurs-item text-center rounded bg-light p-4">
                      <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                        <i className="fas fa-exchange-alt fa-3x text-white"></i>
                      </div>
                      <div className="featurs-content text-center">
                        <h5>30 Day Return</h5>
                        <p className="mb-0">30 day money guarantee</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="featurs-item text-center rounded bg-light p-4">
                      <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                        <i className="fa fa-phone-alt fa-3x text-white"></i>
                      </div>
                      <div className="featurs-content text-center">
                        <h5>24/7 Support</h5>
                        <p className="mb-0">Support every time fast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid fruite py-5">
              <div className="container py-5">
                <div className="tab-className text-center">
                  <div className="row g-4">
                    {/* ===== Our Organic Products Start ===== */}
                    <div className="container-fluid fruite py-5">
                      <div className="container py-5">
                        <div className="tab-class text-center">

                          <div className="row g-4">
                            <div className="col-lg-4 text-start">
                              <h1>Our Organic Products</h1>
                            </div>

                            <div className="col-lg-8 text-end">
                              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                {categories.map((item, index) => (
                                  <li className="nav-item" key={index}>
                                    <a
                                      className={
                                        index === 0
                                          ? "d-flex m-2 py-2 bg-light rounded-pill active"
                                          : "d-flex m-2 py-2 bg-light rounded-pill"
                                      }
                                      data-bs-toggle="pill"
                                      href={`#tab-${index + 1}`}
                                    >
                                      <span className="text-dark" style={{ width: "130px" }}>
                                        {item}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="tab-content">
                            {/* tab-pane ở đây */}
                          </div>

                        </div>
                      </div>
                    </div>
                    {/* ===== Our Organic Products End ===== */}
                  </div>
                  <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                      <div className="row g-4">
                        <div className="col-lg-12">
                          <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item  h-100 d-flex flex-column">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-5.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom d-flex flex-column flex-grow-1">
                                  <h4>Grapes</h4>
                                  <p className="flex-grow-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-5.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Grapes</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-2.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Raspberries</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-4.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Apricots</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-3.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Banana</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-1.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Oranges</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-2.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Raspberries</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-5.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Grapes</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                      <div className="row g-4">
                        <div className="col-lg-12">
                          <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-5.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Grapes</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-2.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Raspberries</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                      <div className="row g-4">
                        <div className="col-lg-12">
                          <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-1.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Oranges</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-6.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Apple</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="tab-4" className="tab-pane fade show p-0">
                      <div className="row g-4">
                        <div className="col-lg-12">
                          <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-5.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Grapes</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-4.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Apricots</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab-5" className="tab-pane fade show p-0">
                      <div className="row g-4">
                        <div className="col-lg-12">
                          <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-3.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Banana</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-2.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Raspberries</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="img/fruite-item-1.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  Fruits
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>Oranges</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit sed do eiusmod te incididunt
                                  </p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      $4.99 / kg
                                    </p>
                                    <a
                                      href="#"
                                      className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid service py-5">
              <div className="container py-5">
                <div className="row g-4 justify-content-center">
                  <div className="col-md-6 col-lg-4">
                    <a href="#">
                      <div className="service-item bg-secondary rounded border border-secondary">
                        <img
                          src="img/featur-1.jpg"
                          className="img-fluid rounded-top w-100"
                          alt=""
                        />
                        <div className="px-4 rounded-bottom">
                          <div className="service-content bg-primary text-center p-4 rounded">
                            <h5 className="text-white">Fresh Apples</h5>
                            <h3 className="mb-0">20% OFF</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <a href="#">
                      <div className="service-item bg-dark rounded border border-dark">
                        <img
                          src="img/featur-2.jpg"
                          className="img-fluid rounded-top w-100"
                          alt=""
                        />
                        <div className="px-4 rounded-bottom">
                          <div className="service-content bg-light text-center p-4 rounded">
                            <h5 className="text-primary">Tasty Fruits</h5>
                            <h3 className="mb-0">Free delivery</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <a href="#">
                      <div className="service-item bg-primary rounded border border-primary">
                        <img
                          src="img/featur-3.jpg"
                          className="img-fluid rounded-top w-100"
                          alt=""
                        />
                        <div className="px-4 rounded-bottom">
                          <div className="service-content bg-secondary text-center p-4 rounded">
                            <h5 className="text-white">Exotic Vegitable</h5>
                            <h3 className="mb-0">Discount 30$</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid vesitable py-5">
              <div className="container py-5">
                <h1 className="mb-0">Fresh Organic Vegetables</h1>
                <div className="owl-carousel vegetable-carousel justify-content-center">
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="img/vegetable-item-6.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Parsely</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="img/vegetable-item-1.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Parsely</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="img/vegetable-item-3.png"
                        className="img-fluid w-100 rounded-top bg-light"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Banana</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="img/vegetable-item-4.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Bell Papper</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="img/vegetable-item-5.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Potatoes</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="img/vegetable-item-6.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Parsely</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="img/vegetable-item-5.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Potatoes</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="img/vegetable-item-6.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Parsely</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid banner bg-secondary my-5">
              <div className="container py-5">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="py-4">
                      <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
                      <p className="fw-normal display-3 text-dark mb-4">
                        in Our Store
                      </p>
                      <p className="mb-4 text-dark">
                        The generated Lorem Ipsum is therefore always free from
                        repetition injected humour, or non-characteristic words etc.
                      </p>
                      <a
                        href="#"
                        className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="position-relative">
                      <img
                        src="img/baner-1.png"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                      <div
                        className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                        style={{
                          width: "140px",
                          height: "140px",
                          top: "0",
                          left: "0",
                        }}
                      >
                        <h1 style={{ fontSize: "100px" }}>1</h1>
                        <div className="d-flex flex-column">
                          <span className="h2 mb-0">50$</span>
                          <span className="h4 text-muted mb-0">kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid py-5">
              <div className="container py-5">
                <div
                  className="text-center mx-auto mb-5"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="display-4">Bestseller Products</h1>
                  <p>
                    Latin words, combined with a handful of model sentence structures,
                    to generate Lorem Ipsum which looks reasonable.
                  </p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="img/best-product-1.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="img/best-product-2.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="img/best-product-3.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="img/best-product-4.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="img/best-product-5.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="img/best-product-6.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="text-center">
                      <img
                        src="img/fruite-item-1.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                      <div className="py-4">
                        <a href="#" className="h5">
                          Organic Tomato
                        </a>
                        <div className="d-flex my-3 justify-content-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="text-center">
                      <img
                        src="img/fruite-item-2.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                      <div className="py-4">
                        <a href="#" className="h5">
                          Organic Tomato
                        </a>
                        <div className="d-flex my-3 justify-content-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="text-center">
                      <img
                        src="img/fruite-item-3.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                      <div className="py-4">
                        <a href="#" className="h5">
                          Organic Tomato
                        </a>
                        <div className="d-flex my-3 justify-content-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="text-center">
                      <img
                        src="img/fruite-item-4.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                      <div className="py-2">
                        <a href="#" className="h5">
                          Organic Tomato
                        </a>
                        <div className="d-flex my-3 justify-content-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                          to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid py-5">
              <div className="container">
                <div className="bg-light p-5 rounded">
                  <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="counter bg-white rounded p-5">
                        <i className="fa fa-users text-secondary"></i>
                        <h4>satisfied customers</h4>
                        <h1>1963</h1>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="counter bg-white rounded p-5">
                        <i className="fa fa-users text-secondary"></i>
                        <h4>quality of service</h4>
                        <h1>99%</h1>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="counter bg-white rounded p-5">
                        <i className="fa fa-users text-secondary"></i>
                        <h4>quality certificates</h4>
                        <h1>33</h1>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="counter bg-white rounded p-5">
                        <i className="fa fa-users text-secondary"></i>
                        <h4>Available Products</h4>
                        <h1>789</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid testimonial py-5">
              <div className="container py-5">
                <div className="testimonial-header text-center">
                  <h4 className="text-primary">Our Testimonial</h4>
                  <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                  <div className="testimonial-item img-border-radius bg-light rounded p-4">
                    <div className="position-relative">
                      <i
                        className="fa fa-quote-right fa-2x text-secondary position-absolute"
                        style={{ bottom: "30px", right: "0" }}
                      ></i>
                      <div className="mb-4 pb-4 border-bottom border-secondary">
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s,
                        </p>
                      </div>
                      <div className="d-flex align-items-center flex-nowrap">
                        <div className="bg-secondary rounded">
                          <img
                            src="img/testimonial-1.jpg"
                            className="img-fluid rounded"
                            style={{ width: "100px", height: "100px" }}
                            alt=""
                          />
                        </div>
                        <div className="ms-4 d-block">
                          <h4 className="text-dark">Client Name</h4>
                          <p className="m-0 pb-3">Profession</p>
                          <div className="d-flex pe-5">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item img-border-radius bg-light rounded p-4">
                    <div className="position-relative">
                      <i
                        className="fa fa-quote-right fa-2x text-secondary position-absolute"
                        style={{ bottom: "30px", right: "0" }}
                      ></i>
                      <div className="mb-4 pb-4 border-bottom border-secondary">
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s,
                        </p>
                      </div>
                      <div className="d-flex align-items-center flex-nowrap">
                        <div className="bg-secondary rounded">
                          <img
                            src="img/testimonial-1.jpg"
                            className="img-fluid rounded"
                            style={{ minWidth: "100px", height: "100px" }}
                            alt=""
                          />
                        </div>
                        <div className="ms-4 d-block">
                          <h4 className="text-dark">Client Name</h4>
                          <p className="m-0 pb-3">Profession</p>
                          <div className="d-flex pe-5">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item img-border-radius bg-light rounded p-4">
                    <div className="position-relative">
                      <i
                        className="fa fa-quote-right fa-2x text-secondary position-absolute"
                        style={{ bottom: "30px", right: "0" }}
                      ></i>
                      <div className="mb-4 pb-4 border-bottom border-secondary">
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s,
                        </p>
                      </div>
                      <div className="d-flex align-items-center flex-nowrap">
                        <div className="bg-secondary rounded">
                          <img
                            src="img/testimonial-1.jpg"
                            className="img-fluid rounded"
                            style={{ width: "100px", height: "100px" }}
                            alt=""
                          />
                        </div>
                        <div className="ms-4 d-block">
                          <h4 className="text-dark">Client Name</h4>
                          <p className="m-0 pb-3">Profession</p>
                          <div className="d-flex pe-5">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4">
                    <div className="col-lg-4 text-start">
                      <h1>Our Organic Products</h1>
                    </div>
                    <div className="col-lg-8 text-end">
                      <ul className="nav nav-pills d-inline-flex text-center mb-5">
                        {categories.map((item, index) => (
                          <li className="nav-item" key={index}>
                            <a
                              className={
                                index === 0
                                  ? "d-flex m-2 py-2 bg-light rounded-pill active"
                                  : "d-flex m-2 py-2 bg-light rounded-pill"
                              }
                              data-bs-toggle="pill"
                              href={`#tab-${index + 1}`}
                            >
                              <span className="text-dark" style={{ width: "130px" }}>
                                {item}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="tab-content">
                    {categories.map((category, index) => (
                      <div
                        id={`tab-${index + 1}`}
                        className={
                          index === 0
                            ? "tab-pane fade show active p-0"
                            : "tab-pane fade p-0"
                        }
                        key={index}
                      >
                        <span>{category}</span>
                        <div className="row g-4">
                          <div className="col-lg-12">
                            <div className="row g-4">
                              {products
                                .filter((product) =>
                                  category === "All Products"
                                    ? true
                                    : product.category === category
                                )
                                .map((item) => (
                                  <div
                                    className="col-md-6 col-lg-4 col-xl-3"
                                    key={item.id}
                                  >
                                    <div className="rounded position-relative fruite-item h-100 d-flex flex-column">
                                      <div className="fruite-img">
                                        <img
                                          src={item.image}
                                          className="img-fluid rounded-top"
                                          style={{ height: "200px", width: "100%" }}
                                          alt=""
                                        />
                                      </div>
                                      <div
                                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                        style={{ top: "10px", left: "10px" }}
                                      >
                                        {item.category}
                                      </div>
                                      <div className="p-4 border border-secondary border-top-0 rounded-bottom d-flex flex-column flex-grow-1">
                                        <h4>{item.name}</h4>
                                        <p>{item.title}</p>
                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                          <p className="text-dark fs-5 fw-bold mb-0">
                                            {item.price}/kg
                                          </p>
                                          <a
                                            href="#"
                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                          >
                                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                            Add to cart
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
