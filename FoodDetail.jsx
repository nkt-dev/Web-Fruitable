
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function FoodDetail({ foods, addToCart }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("description");

  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    rating: 5,
    message: "",
  });

  const food = useMemo(
    () => foods.find((p) => p.id === id),
    [foods, id]
  );

  useMemo(() => {
    setQuantity(1);
    setActiveTab("description");

    const seed =
      food?.reviews?.length
        ? food.reviews
        : [
          {
            name: "John Doe",
            rating: 5,
            date: "Jan 01, 2026",
            message: "Sản phẩm rất tươi, đóng gói kỹ. Sẽ mua lại!",
          },
          {
            name: "Anna",
            rating: 4,
            date: "Jan 05, 2026",
            message: "Hương vị ngon, giá hợp lý.",
          },
        ];
    setReviews(seed);
  }, [food?.id]);

  const handleIncrease = () => setQuantity((q) => (Number(q) || 1) + 1);
  const handleDecrease = () =>
    setQuantity((q) => Math.max(1, (Number(q) || 1) - 1));

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setQuantity(value === "" ? "" : parseInt(value, 10));
    }
  };
  const renderStars = (stars = 5) => {
    const n = Math.max(0, Math.min(5, Number(stars) || 0));
    return (
      <div className="d-flex align-items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={`fas fa-star ${i < n ? "text-warning" : "text-muted"}`}
          ></i>
        ))}
      </div>
    );
  };

  const categories = useMemo(() => {
    const map = new Map();
    foods.forEach((f) => {
      const key = f.category || "Other";
      map.set(key, (map.get(key) || 0) + 1);
    });
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [foods]);

  const relatedProducts = useMemo(() => {
    if (!food) return [];
    return foods
      .filter((p) => p.id !== food.id && p.category === food.category)
      .slice(0, 4);
  }, [foods, food]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.message.trim()) return;

    const newReview = {
      name: reviewForm.name.trim(),
      rating: Number(reviewForm.rating) || 5,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      message: reviewForm.message.trim(),
    };

    setReviews([newReview, ...reviews]);
    setReviewForm({ name: "", email: "", rating: 5, message: "" });
    setActiveTab("review");
  };

  if (!food) {
    return (
      <div className="container py-4">
        <h3>Không tìm thấy sản phẩm</h3>
        <Link to="/" className="btn btn-primary mt-2">
          Về Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* Title */}
      <div className="mb-3">
        <h3 className="page-title">Product Detail</h3>
        <div className="breadcrumb-mini">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          / Product Detail
        </div>
      </div>

      <div className="row g-4">
        {/* LEFT MAIN */}
        <div className="col-lg-8">
          {/* Product top area */}
          <div className="row g-4">
            {/* Image */}
            <div className="col-md-6">
              <img className="product-img" src={food.image} alt={food.name} />
            </div>

            {/* Info */}
            <div className="col-md-6">
              <h4 className="fw-bold mb-2">{food.name}</h4>
              <div className="text-muted mb-2">Category: {food.category}</div>

              <div className="fw-bold fs-5 mb-2">
                {Number(food.price).toFixed(2)} $
              </div>

              <div className="mb-3">{renderStars(food.rating)}</div>

              <p className="text-muted">
                {food.description ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt."}
              </p>

              {/* Quantity */}
              <div className="d-flex align-items-center gap-2 my-3">
                <button
                  className="qty-btn"
                  onClick={handleDecrease}
                  disabled={Number(quantity) <= 1}
                  type="button"
                  aria-label="Decrease"
                  title="Decrease"
                >
                  <i className="fas fa-minus"></i>
                </button>

                <input
                  className="qty-input"
                  value={quantity}
                  onChange={handleChange}
                />

                <button
                  className="qty-btn"
                  onClick={handleIncrease}
                  type="button"
                  aria-label="Increase"
                  title="Increase"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>

              {/* Add to cart giống trang chủ */}
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <button
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                  onClick={() => addToCart(food, quantity === "" ? 1 : quantity)}
                  type="button"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i>
                  Add to cart
                </button>

                <Link
                  to="/cart"
                  className="btn btn-outline-secondary rounded-pill px-3"
                >
                  View cart
                </Link>
              </div>
            </div>
          </div>

          {/* ✅ DESCRIPTION + REVIEW TABS */}
          <div className="mt-4 detail-tabs-wrap">
            <ul className="nav nav-tabs detail-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "description" ? "active" : ""
                    }`}
                  type="button"
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "review" ? "active" : ""
                    }`}
                  type="button"
                  onClick={() => setActiveTab("review")}
                >
                  Reviews ({reviews.length})
                </button>
              </li>
            </ul>

            <div className="detail-tab-content border border-top-0 p-4 rounded-bottom">
              {/* Description tab */}
              {activeTab === "description" && (
                <div>
                  <h5 className="fw-bold mb-2">About this product</h5>
                  <p className="text-muted mb-2">
                    {food.longDescription ||
                      `${food.description || ""} 
                      This product is selected carefully with high quality standards. 
                      Suitable for daily meals, healthy diet and family use.`}
                  </p>

                  <ul className="text-muted mb-0">
                    <li>Fresh & Organic quality</li>
                    <li>Fast delivery & safe packaging</li>
                    <li>Best choice for healthy lifestyle</li>
                  </ul>
                </div>
              )}

              {/* Review tab */}
              {activeTab === "review" && (
                <div>
                  {/* Review list */}
                  <div className="mb-4">
                    {reviews.map((r, idx) => (
                      <div key={idx} className="review-item">
                        <div className="d-flex justify-content-between align-items-start gap-2">
                          <div>
                            <div className="fw-bold">{r.name}</div>
                            <div className="text-muted small">{r.date}</div>
                          </div>

                          <div>{renderStars(r.rating)}</div>
                        </div>

                        <div className="text-muted mt-2">{r.message}</div>
                      </div>
                    ))}
                  </div>

                  {/* Review form */}
                  <h5 className="fw-bold mb-3">Add a review</h5>
                  <form onSubmit={handleSubmitReview}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          placeholder="Your Name"
                          value={reviewForm.name}
                          onChange={(e) =>
                            setReviewForm({ ...reviewForm, name: e.target.value })
                          }
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          className="form-control"
                          placeholder="Email (optional)"
                          value={reviewForm.email}
                          onChange={(e) =>
                            setReviewForm({
                              ...reviewForm,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-bold mb-1">
                          Rating
                        </label>
                        <select
                          className="form-select"
                          value={reviewForm.rating}
                          onChange={(e) =>
                            setReviewForm({
                              ...reviewForm,
                              rating: e.target.value,
                            })
                          }
                        >
                          <option value={5}>5 - Excellent</option>
                          <option value={4}>4 - Good</option>
                          <option value={3}>3 - Average</option>
                          <option value={2}>2 - Poor</option>
                          <option value={1}>1 - Bad</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-bold mb-1">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Write your review..."
                          value={reviewForm.message}
                          onChange={(e) =>
                            setReviewForm({
                              ...reviewForm,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="col-12">
                        <button
                          className="btn border border-secondary rounded-pill px-4 text-primary"
                          type="submit"
                        >
                          <i className="fas fa-paper-plane me-2 text-primary"></i>
                          Submit Review
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="fw-bold mb-3">Related products</h4>

            {relatedProducts.length === 0 ? (
              <div className="alert alert-light border">
                Không có sản phẩm liên quan trong danh mục này.
              </div>
            ) : (
              <div className="row g-3">
                {relatedProducts.map((p) => (
                  <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
                    <div className="related-card h-100">
                      <Link to={`/food/${p.id}`}>
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-100 related-img"
                        />
                      </Link>

                      <div className="p-3">
                        <div className="small text-muted mb-1">{p.category}</div>

                        <Link to={`/food/${p.id}`} className="text-dark">
                          <div className="fw-bold related-title">{p.name}</div>
                        </Link>

                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <div className="fw-bold">
                            ${Number(p.price).toFixed(2)}
                          </div>

                          <button
                            className="btn border border-secondary rounded-pill px-3 text-primary btn-sm"
                            type="button"
                            onClick={() => addToCart(p, 1)}
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-lg-4">
          {/* Search */}
          <div className="sidebar-box mb-3">
            <div className="input-group">
              <input className="form-control" placeholder="keywords" />
              <button className="btn btn-light border" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* Categories clickable để lọc Home */}
          <div className="sidebar-box">
            <div className="sidebar-title">Categories</div>

            <div className="category-list">
              {categories.map((c) => (
                <Link
                  key={c.name}
                  to={`/?cat=${encodeURIComponent(c.name)}`}
                  className="category-row category-link"
                  title={`Filter: ${c.name}`}
                >
                  <div className="category-left">
                    <i className="fas fa-apple-alt category-icon"></i>
                    <span className="category-name">{c.name}</span>
                  </div>
                  <span className="category-count">({c.count})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* END SIDEBAR */}
      </div>
    </div>
  );
}
