import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const tabs = ["All Products", "Vegetables", "Fruits", "Bread", "Meat"];

export default function Home({ foods, addToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get("cat");

  const [active, setActive] = useState("All Products");

  useEffect(() => {
    if (!catParam) {
      setActive("All Products");
      return;
    }
    const found = tabs.find((t) => t.toLowerCase() === catParam.toLowerCase());
    setActive(found || "All Products");
  }, [catParam]);

  const handleTabClick = (tab) => {
    setActive(tab);
    if (tab === "All Products") setSearchParams({});
    else setSearchParams({ cat: tab });
  };

  const filtered = useMemo(() => {
    if (active === "All Products") return foods;
    return foods.filter(
      (f) => (f.category || "").toLowerCase() === active.toLowerCase()
    );
  }, [foods, active]);

  return (
    <>
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            {/* LEFT TEXT */}
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
              <h1 className="mb-4 display-3 text-primary">
                Organic Veggies & Fruits Foods
              </h1>

              <div className="position-relative mx-auto hero-search">
                <input
                  className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                  type="text"
                  placeholder="Search (demo)"
                />
                <button
                  type="button"
                  className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100 hero-submit"
                >
                  Submit Now
                </button>
              </div>
            </div>

            <div className="col-md-12 col-lg-5">
              <div className="hero-right-card">
                <img
                  src="/img/hero-img-1.png"
                  alt="Hero"
                  className="img-fluid w-100 h-100 rounded hero-right-img"
                  onError={(e) => {
                    e.currentTarget.src = "/img/banner-fruits.jpg";
                  }}
                />
                <div className="hero-chip bg-secondary text-white">Fruits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4 text-start">
                <h1>Our Organic Products</h1>
              </div>

              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  {tabs.map((t) => (
                    <li className="nav-item" key={t}>
                      <button
                        className={`nav-link d-flex m-2 py-2 bg-light rounded-pill ${active === t ? "active" : ""
                          }`}
                        type="button"
                        onClick={() => handleTabClick(t)}
                      >
                        <span style={{ width: 130, display: "inline-block" }}>
                          {t}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product list */}
            <div className="tab-content">
              <div className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {filtered.map((food) => (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={food.id}>
                          <div className="rounded position-relative fruite-item h-100">
                            <div className="fruite-img">
                              <Link to={`/food/${food.id}`} title="View detail">
                                <img
                                  src={food.image}
                                  className="img-fluid w-100 rounded-top"
                                  alt={food.name}
                                />
                              </Link>
                            </div>

                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              {food.category || "Fruits"}
                            </div>

                            <div className="p-4 border border-secondary border-top-0 rounded-bottom d-flex flex-column">
                              <Link to={`/food/${food.id}`} className="text-dark">
                                <h4 className="mb-2">{food.name}</h4>
                              </Link>

                              <p className="mb-3 flex-grow-1" style={{ color: "var(--muted)" }}>
                                {food.description ||
                                  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"}
                              </p>

                              <div className="d-flex justify-content-between flex-lg-wrap align-items-center gap-2">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  ${Number(food.price).toFixed(2)} / kg
                                </p>

                                <div className="d-flex gap-2 flex-wrap">
                                  {/* Nút Detail (mới) */}
                                  <Link
                                    to={`/food/${food.id}`}
                                    className="btn btn-outline-secondary rounded-pill px-3 btn-sm"
                                  >
                                    Detail
                                  </Link>

                                  {/* Add to cart */}
                                  <button
                                    className="btn border border-secondary rounded-pill px-3 text-primary btn-sm"
                                    type="button"
                                    onClick={() => addToCart(food, 1)}
                                  >
                                    <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                    Add
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {filtered.length === 0 && (
                        <div className="col-12">
                          <div className="alert alert-light border">
                            Không có sản phẩm trong tab <b>{active}</b>.
                          </div>
                        </div>
                      )}
                    </div>
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
