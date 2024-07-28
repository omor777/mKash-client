import { useState } from "react";
import { useGetTransactionQuery } from "../../services/agentTransaction";
import { Badge, Button, Pagination, Spinner, Table } from "flowbite-react";

const TransactionManagement = () => {
  const [page, setPage] = useState(1);
  const { data: transactions, isLoading } = useGetTransactionQuery({ page });

  const handlePagination = (p) => {
    setPage(p);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }
  return (
    <div className="mt-20">
      <div className="overflow-x-auto shadow-md">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Mobile</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {transactions.data.map((item) => (
              <Table.Row
                key={item._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{item.from.name}</Table.Cell>
                <Table.Cell>{item.from.email}</Table.Cell>
                <Table.Cell>{item.from.mobile_number}</Table.Cell>
                <Table.Cell>
                  {new Date(item.createdAt).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>
                  <Badge
                    className="w-20 justify-center"
                    color={
                      item.status === "PENDING"
                        ? "warning"
                        : item.status === "COMPLETED"
                        ? "success"
                        : "failure"
                    }
                  >
                    {item.status}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button size="xs">Approved</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex overflow-x-auto sm:justify-center mt-5">
        <Pagination
          currentPage={page}
          totalPages={transactions.totalPages}
          onPageChange={handlePagination}
        />
      </div>
    </div>
  );
};

export default TransactionManagement;
