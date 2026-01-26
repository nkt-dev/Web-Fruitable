import { useEffect, useState } from "react";
import { userData } from "../data/Users";
import { useAuth } from "./AuthProvider";

export default function Users() {
  const { hasPermission } = useAuth();
  const canDelete = hasPermission("delete");

  const roles = ["Admin", "Manager", "User", "Customer"];

  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem("user"));
    return storedUsers && storedUsers.length > 0 ? storedUsers : userData;
  });

  const [editUser, setEditUser] = useState(null);
  const [newUser, setNewUser] = useState({
    id: null,
    image: "/images/avatar.jpg",
    username: "",
    email: "",
    role: "User",
    locked: false,
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(users));
  }, [users]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  const handleAddUser = () => {
    if (!newUser.username || !newUser.email) {
      return alert("Vui lòng nhập đủ thông tin!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUser.email)) {
      return alert("Email không hợp lệ!");
    }

    const defaultPermissionsByRole = {
      admin: ["create", "update", "delete", "view"],
      user: ["create", "update"],
      manager: ["create", "update", "view"],
      customer: ["view"]
    };

    const userToAdd = {
      ...newUser,
      id: Date.now(),
      permissions: defaultPermissionsByRole[newUser.role.toLowerCase()] || []
    };
  };

  const handleDelete = (id) => {
    if (!canDelete) {
      alert("Bạn không có quyền xóa người dùng!");
      return;
    }

    if (window.confirm("Xóa người dùng này?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleSaveEdit = () => {
    setUsers(users.map(u =>
      u.id === editUser.id
        ? {
          ...editUser,
          permissions:
            defaultPermissionsByRole[editUser.role.toLowerCase()] || u.permissions
        }
        : u
    ));
    setEditUser(null);
  };

  const toggleLock = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, locked: !u.locked } : u));
  };

  const getPagination = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage > 3) pageNumbers.push(1, "...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pageNumbers.push(i);
      if (currentPage < totalPages - 2) pageNumbers.push("...", totalPages);
    }
    return pageNumbers;
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-primary">Quản Lý Người Dùng</h2>

      <table className="table table-hover border shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Tên đăng nhập</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Trạng thái</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} className="align-middle">
              <td>{startIndex + index + 1}</td>
              <td>
                {editUser?.id === user.id ? (
                  <input className="form-control form-control-sm" value={editUser.username}
                    onChange={e => setEditUser({ ...editUser, username: e.target.value })} />
                ) : user.username}
              </td>
              <td>
                {editUser?.id === user.id ? (
                  <input className="form-control form-control-sm" value={editUser.email}
                    onChange={e => setEditUser({ ...editUser, email: e.target.value })} />
                ) : user.email}
              </td>
              <td>
                {editUser?.id === user.id ? (
                  <select className="form-select form-select-sm" value={editUser.role}
                    onChange={e => setEditUser({ ...editUser, role: e.target.value })}>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                ) : (
                  <span className={`badge ${user.role === 'Admin' ? 'bg-danger' : 'bg-info text-dark'}`}>
                    {user.role}
                  </span>
                )}
              </td>
              <td>
                <button onClick={() => toggleLock(user.id)} className={`btn btn-sm ${user.locked ? 'btn-outline-danger' : 'btn-outline-success'}`}>
                  {user.locked ? "Đã khóa" : "Hoạt động"}
                </button>
              </td>
              <td className="text-center">
                {editUser?.id === user.id ? (
                  <div className="d-flex gap-2 justify-content-center">
                    <button className="btn btn-success btn-sm" onClick={handleSaveEdit}>Lưu</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditUser(null)}>Hủy</button>
                  </div>
                ) : (
                  <div className="d-flex gap-2 justify-content-center">
                    <button className="btn btn-warning btn-sm" onClick={() => setEditUser({ ...user })}>Sửa</button>
                    {canDelete && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Xóa
                      </button>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}

          {/* Dòng thêm mới người dùng */}
          <tr className="table-light">
            <td>New</td>
            <td><input className="form-control form-control-sm" placeholder="Username..." value={newUser.username} onChange={e => setNewUser({ ...newUser, username: e.target.value })} /></td>
            <td><input className="form-control form-control-sm" placeholder="Email..." value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} /></td>
            <td>
              <select className="form-select form-select-sm" value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })}>
                {roles.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </td>
            <td>-</td>
            <td className="text-center">
              <button className="btn btn-primary btn-sm w-100" onClick={handleAddUser}>Thêm mới</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Điều hướng Phân trang */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Trước</button>
          </li>
          {getPagination().map((page, index) => (
            <li key={index} className={`page-item ${currentPage === page ? "active" : ""} ${page === "..." ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => page !== "..." && setCurrentPage(page)}>{page}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Sau</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}