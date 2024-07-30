import { useState } from "react";
import {
  useApproveTransactionMutation,
  useGetTransactionQuery,
} from "../../services/transaction";
import { Badge, Button, Pagination, Spinner, Table } from "flowbite-react";
import { toast } from "react-toastify";

const TransactionManagement = () => {
  const [page, setPage] = useState(1);
  const { data: transactions, isLoading } = useGetTransactionQuery(
    { page }
  );
  const [approveTransaction] = useApproveTransactionMutation();

  const handlePagination = (p) => {
    setPage(p);
  };

  const handleTransactionRequest = async (id) => {
    console.log(id);
    try {
      const data = await approveTransaction({ id }).unwrap();
      if (data.success) {
        toast.success(data.message);
      }
    } catch (e) {
      toast.error(e.data.message);
      console.error(e);
    }
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
            <Table.HeadCell>Mobile</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
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
                <Table.Cell>{item.from.mobile_number}</Table.Cell>
                <Table.Cell>
                  <span className="font-bold">{item.amount}</span>
                </Table.Cell>
                <Table.Cell>
                  <Badge
                    color={
                      item.transaction_type === "cashIn" ? "info" : "purple"
                    }
                    className="w-16 justify-center"
                  >
                    <span className="capitalize">{item.transaction_type}</span>
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge
                    className="w-24 justify-center"
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
                  <Button
                    onClick={() => handleTransactionRequest(item._id)}
                    disabled={
                      item.status === "COMPLETED" || item.status === "FAILED"
                    }
                    size="xs"
                  >
                    Approved
                  </Button>
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
