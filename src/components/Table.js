import React from "react";
import Box from '@material-ui/core/Box';
import { SaveIconButton } from "../icons/SaveIconButton";
import { DeleteIconButton } from "../icons/DeleteIconButton";
import { EditIconButton } from "../icons/EditIconButton";

function Table({
  users,
  selectedRows,
  editMode,
  editedUser,
  onSelect,
  onDelete,
  onEdit,
  onSave,
}) {
  return (
    <div class="table-responsive">
      <table className="table align-middle mb-0 table-dark">
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                checked={selectedRows.length === users.length}
                onChange={() => {
                  if (selectedRows.length === users.length) {
                    onSelect([]);
                  } else {
                    onSelect([...users]);
                  }
                }}
              />
            </th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col" className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="responsive-table-body">
          {users.map((user) => (
            <tr
              key={user.id}
              className={selectedRows.includes(user) ? "bg-secondary" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(user)}
                  onChange={() => onSelect(user)}
                />
              </td>
              <td>{user.id}</td>
              <td>
                {editMode && editedUser && editedUser.id === user.id ? (
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) =>
                      onEdit({ ...editedUser, name: e.target.value })
                    }
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editMode && editedUser && editedUser.id === user.id ? (
                  <input
                    type="text"
                    value={editedUser.email}
                    onChange={(e) =>
                      onEdit({ ...editedUser, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editMode && editedUser && editedUser.id === user.id ? (
                  <input
                    type="text"
                    value={editedUser.role}
                    onChange={(e) =>
                      onEdit({ ...editedUser, role: e.target.value })
                    }
                  />
                ) : (
                  user.role
                )}
              </td>
              <td className="text-center">
                {editMode && editedUser && editedUser.id === user.id ? (
                  <SaveIconButton onSave={onSave} userId={user.id} />
                ) : (
                  <Box display="flex"  justifyContent="space-around">
                    <DeleteIconButton onDelete={onDelete} userId={user.id}/>
                    <EditIconButton onEdit={onEdit} user={user} />
                  </Box>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
