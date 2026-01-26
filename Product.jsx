import { useState } from "react";
import { useAuth } from "./AuthProvider";

export default function Product({ foods, setFoods }) {

    const { hasPermission } = useAuth();
    const canDelete = hasPermission("delete");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(foods.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = foods.slice(startIndex, startIndex + itemsPerPage);
    const getPagination = () => {
        const pageNumbers = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage > 3) pageNumbers.push(1, "...");
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }
            if (currentPage < totalPages - 2) pageNumbers.push("...", totalPages);
        }
        return pageNumbers;
    };

    const categories = ["Vegetables", "Fruits", "Bread", "Meat"];
    const [editProduct, setEditProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        id: null,
        name: "",
        price: 0,
        image: "/images/no-image-icon.jpg",
        description: "",
        category: "",
        stock: 0,
        rating: 0,
    });

    const handleFileChange = (id, e) => {
        const file = e.target.files[0];
        if (file) {
            if (id == "new") {
                setNewProduct({ ...newProduct, image: "/images/" + file.name });
            } else {
                setEditProduct({ ...editProduct, image: "/images/" + file.name });
            }
        }
    };

    const handleImageClick = (productId) => {
        const inputElement = document.getElementById(`file-input-${productId}`);
        if (inputElement) {
            inputElement.click();
        }
    };

    const handleAddProduct = () => {
        setFoods([...foods, { ...newProduct, id: Date.now() }]);
        setNewProduct({
            id: null,
            name: "",
            price: 0,
            image: "/images/no-image-icon.jpg",
            description: "",
            category: "",
            stock: 0,
            rating: 0,
        });
        // Tính số trang mới 
        // const newTotalPages = Math.ceil(products.length / itemsPerPage); 
        // Chuyển đến trang cuối 
        //setCurrentPage(newTotalPages); 

    };

    const handleDelete = (id) => {
        setFoods(foods.filter((product) => product.id !== id));
    };

    const handleUpdate = () => {
        setFoods(
            foods.map((p) => (p.id === editProduct.id ? editProduct : p))
        );
        setEditProduct(null);
    };

    return (
        <div className="p-5">
            <table className="table table-bordered shadow-sm">
                <thead className="table-light">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product) => (
                        <tr key={product.id}>
                            {/* Image */}
                            <td className="text-center" style={{ width: "100px" }}>
                                {editProduct?.id === product.id ? (
                                    <>
                                        <img
                                            src={editProduct.image}
                                            alt="edit"
                                            style={{ width: "50px", cursor: "pointer" }}
                                            onClick={() => handleImageClick(product.id)}
                                        />
                                        <input
                                            type="file"
                                            id={`file-input-${product.id}`}
                                            style={{ display: "none" }}
                                            onChange={(e) => handleFileChange(product.id, e)}
                                        />
                                    </>
                                ) : (
                                    <img src={product.image} alt={product.name} style={{ width: "50px" }} />
                                )}
                            </td>

                            {/* Name */}
                            <td>
                                {editProduct?.id === product.id ? (
                                    <input
                                        className="form-control"
                                        value={editProduct.name}
                                        onChange={(e) =>
                                            setEditProduct({ ...editProduct, name: e.target.value })
                                        }
                                    />
                                ) : (
                                    product.name
                                )}
                            </td>

                            {/* Price */}
                            <td>
                                {editProduct?.id === product.id ? (
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={editProduct.price}
                                        onChange={(e) =>
                                            setEditProduct({ ...editProduct, price: e.target.value })
                                        }
                                    />
                                ) : (
                                    `$${product.price}`
                                )}
                            </td>

                            {/* Description */}
                            <td>
                                {editProduct?.id === product.id ? (
                                    <input
                                        className="form-control"
                                        value={editProduct.description}
                                        onChange={(e) =>
                                            setEditProduct({
                                                ...editProduct,
                                                description: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    product.description
                                )}
                            </td>

                            {/* Category */}
                            <td>
                                {editProduct?.id === product.id ? (
                                    <select
                                        className="form-select"
                                        value={editProduct.category}
                                        onChange={(e) =>
                                            setEditProduct({ ...editProduct, category: e.target.value })
                                        }
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    product.category
                                )}
                            </td>

                            {/* Rating */}
                            <td>
                                {editProduct?.id === product.id ? (
                                    <input
                                        type="number"
                                        max="5"
                                        className="form-control"
                                        value={editProduct.rating}
                                        onChange={(e) =>
                                            setEditProduct({ ...editProduct, rating: e.target.value })
                                        }
                                    />
                                ) : (
                                    <span>{"⭐".repeat(product.rating)}</span>
                                )}
                            </td>

                            {/* Actions */}
                            <td>
                                {editProduct?.id === product.id ? (
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={handleUpdate}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm"
                                            onClick={() => setEditProduct(null)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-warning btn-sm text-white"
                                            onClick={() => setEditProduct({ ...product })} // ✅ clone
                                        >
                                            Edit
                                        </button>
                                        {canDelete && (
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}

                    {/* ✅ ADD PRODUCT — CHỈ 1 DÒNG, NGOÀI MAP */}
                    <tr className="table-light">
                        <td className="text-center">
                            <img
                                src={newProduct.image}
                                alt="new"
                                style={{ width: "50px", cursor: "pointer" }}
                                onClick={() => handleImageClick("new")}
                            />
                            <input
                                type="file"
                                id="file-input-new"
                                style={{ display: "none" }}
                                onChange={(e) => handleFileChange("new", e)}
                            />
                        </td>

                        <td>
                            <input
                                className="form-control"
                                placeholder="Name"
                                value={newProduct.name}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, name: e.target.value })
                                }
                            />
                        </td>

                        <td>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Price"
                                value={newProduct.price}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, price: e.target.value })
                                }
                            />
                        </td>

                        <td>
                            <input
                                className="form-control"
                                placeholder="Description"
                                value={newProduct.description}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </td>

                        <td>
                            <select
                                className="form-select"
                                value={newProduct.category}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, category: e.target.value })
                                }
                            >
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </td>

                        <td>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Rating"
                                value={newProduct.rating}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, rating: e.target.value })
                                }
                            />
                        </td>

                        <td>
                            <button className="btn btn-primary w-100" onClick={handleAddProduct}>
                                Add
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* Pagination */}
            <nav>
                <ul
                    className="pagination justify-content-center"
                    style={{ display: "flex" }}
                >
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>
                    </li>
                    {getPagination().map((page, index) => (
                        <li
                            key={index}
                            className={`page-item ${currentPage === page ? "active" : ""} ${page === "..." ? "disabled" : ""
                                }`}
                        >
                            <button
                                className="page-link"
                                onClick={() => page !== "..." && setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li
                        className={`page-item ${currentPage === totalPages ? "disabled" : ""
                            }`}
                    >
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}