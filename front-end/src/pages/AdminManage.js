import React from 'react';
import AdminForm from '../components/AdminForm';
import AdminTable from '../components/AdminTable';
import Header from '../components/Header';

export default function AdminManage() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Cadastrar novo usuário</h2>
      <AdminForm />
      <AdminTable />
    </div>
  );
}
