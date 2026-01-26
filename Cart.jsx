import { Link } from "react-router-dom";

export default function Cart({ cart = [], setCarts }) {
  const updateQuantity = (id, quantity) => {
    setCarts(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeCart = (id) => {
    setCarts(cart.filter((item) => item.id !== id));
  };

  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <h3 className="fw-bold m-0">Cart</h3>
        <Link to="/" className="btn btn-outline-secondary rounded-pill">
          Back Home
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="alert alert-light border">Giỏ hàng đang trống.</div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Products</th>
                <th>Name</th>
                <th>Price</th>
                <th style={{ width: 200 }}>Quantity</th>
                <th>Total</th>
                <th>Handle</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle"
                      style={{ width: 70, height: 70, objectFit: "cover" }}
                    />
                  </td>

                  <td className="fw-bold">{item.name}</td>

                  <td>{Number(item.price).toFixed(2)} $</td>

                  <td>
                    <div className="d-inline-flex align-items-center gap-2">
                      {/* MINUS */}
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        disabled={item.quantity <= 1}
                        type="button"
                        aria-label="Decrease"
                        title="Decrease"
                      >
                        <i className="fas fa-minus"></i>
                      </button>

                      <span className="px-2 fw-bold">{item.quantity}</span>

                      {/* PLUS */}
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        type="button"
                        aria-label="Increase"
                        title="Increase"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </td>

                  <td className="fw-bold">
                    {(item.price * item.quantity).toFixed(2)} $
                  </td>

                  <td>
                    <button
                      className="btn btn-outline-danger rounded-pill"
                      onClick={() => removeCart(item.id)}
                      type="button"
                    >
                      <i className="fas fa-times me-2"></i>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={4} className="text-end fw-bold">
                  Grand Total:
                </td>
                <td colSpan={2} className="fw-bold">
                  {grandTotal.toFixed(2)} $
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
