import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function Signin({ setIsAuthenticated, users, setCurrentUser }) {

    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = (e) => {
        console.log("users:", users);
        console.log("input:", username, password);

        e.preventDefault();
        const account = users.find(
            (u) => u.username === username && u.password === password
        );
        if (!account) {
            alert("Invalid username or password");
            return;
        }
        if (account.locked) {
            alert("Your account has been locked. Please contact the administrator.");
            return;
        }
        const safeAccount = {
            id: account.id,
            username: account.username,
            role: account.role,
            locked: account.locked,
            permissions: account.permissions || []
        };

        setIsAuthenticated(true);
        localStorage.setItem("isLogin", "true");
        setCurrentUser(safeAccount);
        login(safeAccount);
        localStorage.setItem("currentUser", JSON.stringify(safeAccount));
        if (safeAccount.role.toLowerCase() === "customer") {
            navigate("/");
        } else {
            navigate("/dashboard");
        }
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                    <form>
                        <div
                            className="bg-white my-5 mx-auto"
                            style={{ borderRadius: "1rem", maxWidth: "500px" }}
                        >
                            <div className="p-5 w-100 d-flex flex-column">
                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-primary-50 mb-3">
                                    Please enter your login and password!
                                </p>

                                <label>Email address</label>
                                <input
                                    className="mb-4 w-100"
                                    type="text"
                                    autoComplete="username"
                                    size="lg"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label>Password</label>
                                <input
                                    className="mb-4 w-100"
                                    type="password"
                                    autoComplete="new-password"
                                    size="lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                    />
                                    <label className=" mb-4 form-check-label">
                                        Remember password
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary text-white"
                                    onClick={handleSignin}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}