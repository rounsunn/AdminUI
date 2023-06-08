import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import { getUsers } from "./services/userService";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [editedUser, setEditedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const PAGE_SIZE = 10;

  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        console.error("Error fetching Users List: ", error);
      }
    };
    fetchUsersList();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.id.toLowerCase().includes(searchText.toLowerCase()) ||
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.role.toLowerCase().includes(searchText.toLowerCase())
  );

  const pageCount = Math.ceil(filteredUsers.length / PAGE_SIZE);

  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handleSelect = (user) => {
    const index = selectedRows.indexOf(user);
    if (index > -1) {
      setSelectedRows(selectedRows.filter((row) => row.id !== user.id));
    } else {
      setSelectedRows([...selectedRows, user]);
    }
  };

  const handleDeleteSelected = () => {
    const newUsers = users.filter((user) => !selectedRows.includes(user));
    setUsers(newUsers);
    setSelectedRows([]);
  };

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  const handleEdit = (user) => {
    setEditedUser(user);
    setEditMode(true);
  };

  const handleSave = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return editedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditedUser(null);
    setEditMode(false);
  };

  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedUsers = filteredUsers.slice(start, start + PAGE_SIZE);

  return (
    <Box className="admin-dashboard">
      <SearchBar searchText={searchText} onSearch={handleSearch} />
      <Table
        users={paginatedUsers}
        selectedRows={selectedRows}
        editMode={editMode}
        editedUser={editedUser}
        onSelect={handleSelect}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSave={handleSave}
      />
      <Box display="flex"  justifyContent="space-between" className="p-2">
        <button
            className="btn-danger border-0 rounded-pill p-2"
            onClick={ handleDeleteSelected }
          >
            Delete Selected
        </button>
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onClick={handleClick}
        />
      </Box>
    </Box>
  );
}

export default AdminDashboard;
