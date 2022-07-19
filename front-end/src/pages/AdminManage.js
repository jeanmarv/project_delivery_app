import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function AdminManage() {
  const { user, resetUser } = useContext(GlobalContext);

  if (user.role !== 'administrator') resetUser();

  return <div>AdminManage</div>;
}
