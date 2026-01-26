import { useState, useEffect } from "react";
import { userData } from "./data/Users";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider.jsx";
import Home from "./components/home/Home";
import Signin from "./components/Signin";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Users from "./components/Users";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FoodDetail from "./components/food/FoodDetail.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Foods from "./data/Foods.js";
import Carts from "./data/Carts.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : userData;
  });
  const [foods, setFoods] = useState(Foods);
  const [cart, setCarts] = useState(Carts);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const user = localStorage.getItem("currentUser");

    if (isLogin === "true" && user) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(user));
    } else {
      setIsAuthenticated(false);
      setCurrentUser(null);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");

    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const addToCart = (product, value = 1) => {
    const qty = Number(value) || 1;
    const existed = cart.find((item) => item.id === product.id);

    if (existed) {
      setCarts(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    } else {
      setCarts([...cart, { ...product, quantity: qty }]);
    }
  };

  const IMG_BASE = "/img";
  const [products, setProducts] = useState([
    {
      id: "d1",
      name: "Banana",
      price: 4.99,
      image: `${IMG_BASE}/fruite-item-3.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
      rating: 5,
    },
    {
      id: "d2",
      name: "Orange",
      price: 5.49,
      image: `${IMG_BASE}/fruite-item-1.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
      rating: 3,
    },
    {
      id: "d3",
      name: "Raspberries",
      price: 6.99,
      image: `${IMG_BASE}/fruite-item-2.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
      rating: 4,
    },
    {
      id: "d4",
      name: "Grapes",
      price: 4.79,
      image: `${IMG_BASE}/fruite-item-5.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
      rating: 5,
    },
    {
      id: "d5",
      name: "Apricots",
      price: 4.79,
      image: `${IMG_BASE}/apricot.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
      rating: 3,
    },

    {
      id: "d6",
      name: "Apple",
      price: 4.79,
      image: `${IMG_BASE}/apple.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
      rating: 4,
    },
    {
      id: "d7",
      name: "Strawberry",
      price: 4.79,
      image: `${IMG_BASE}/strawberry.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Fruits",
      rating: 4,
    },
    {
      id: "d8",
      name: "Bread",
      price: 2.5,
      image: `${IMG_BASE}/bread.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Bread",
      rating: 5,
    },

    {
      id: "d9",
      name: "Chicken",
      price: 6.99,
      image: `${IMG_BASE}/chicken.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Meat",
      rating: 3,
    },
    {
      id: "d10",
      name: "pork ribs",
      price: 10.99,
      image: `${IMG_BASE}/porkribs.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      category: "Meat",
      rating: 1,
    },
  ]);

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  cart={cart}
                  currentUser={currentUser}
                  isAuthenticated={isAuthenticated}
                  onLogout={handleLogout}
                />
              }
            >
              <Route
                index
                element={<Home foods={products} addToCart={addToCart} />}
              />
              <Route
                path="food/:id"
                element={<FoodDetail foods={products} addToCart={addToCart} />}
              />
              <Route
                path="cart"
                element={<Cart cart={cart} setCarts={setCarts} />}
              />
              <Route
                path="/signin"
                element={
                  <Signin
                    users={users}
                    setIsAuthenticated={setIsAuthenticated}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              <Route
                path="dashboard"
                element={
                  isAuthenticated
                    ? (
                      <Dashboard
                        onLogout={handleLogout}
                        currentUser={currentUser}
                      />
                    )
                    : <Navigate to="/signin" />
                }
              >
                <Route path="user" element={<Users users={users} setUsers={setUsers} />} />
                <Route path="product" element={<Product foods={foods} setFoods={setFoods} />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;