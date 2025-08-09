import React from 'react';
import Layout from '../components/Layout';
import { Card, CardHeader, CardBody, Table, TableHeader, TableBody, TableRow, TableCell } from 'lightswind'; // Assuming 'lightswind' has these components

const Dashboard = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Peter Jones', email: 'peter@example.com', role: 'User' },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>Total Users</CardHeader>
          <CardBody>
            <p className="text-4xl font-bold">1,234</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Sales</CardHeader>
          <CardBody>
            <p className="text-4xl font-bold">$56,789</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Pending Orders</CardHeader>
          <CardBody>
            <p className="text-4xl font-bold">42</p>
          </CardBody>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>Recent Users</CardHeader>
          <CardBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
