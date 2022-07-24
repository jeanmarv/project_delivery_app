import React, { useContext, useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/requests';
import GlobalContext from '../context/GlobalContext';

export default function AdminTable() {
  const { setError } = useContext(GlobalContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const request = await getUsers();
      if (request.error) {
        setError(request.error);
        return;
      }
      setUsers(request);
    }
    fetchUsers();
  }, [users]);

  const handleClick = async (email) => {
    await deleteUser({ email });
    setUsers([]);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map(({ id, name: username, email, role }, index) => (
          <tr key={ index }>
            <td data-testid={ `admin_manage__element-user-table-item-number-${index}` }>
              { id }
            </td>
            <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
              { username }
            </td>
            <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
              { email }
            </td>
            <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
              { role }
            </td>
            <td>
              <button
                type="button"
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
                onClick={ () => handleClick(email) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
