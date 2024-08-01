import { useState } from "react";
import { useTransactionHistoryAdminQuery } from "../../services/transaction";
import { Pagination, Spinner, Table } from "flowbite-react";

const TransactionHistoryAdmin = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useTransactionHistoryAdminQuery({ page });

  const handlePagination = (p) => {
    setPage(p);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size={"xl"} />
      </div>
    );
  }

  return (
    <div className="my-20">
      <div className="overflow-x-auto shadow-md">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="text-nowrap">name</Table.HeadCell>
            <Table.HeadCell className="text-nowrap">email</Table.HeadCell>
            <Table.HeadCell className="text-nowrap">mobile</Table.HeadCell>
            <Table.HeadCell className="text-nowrap">amount</Table.HeadCell>

            <Table.HeadCell className="text-nowrap">
              Transaction type
            </Table.HeadCell>
            <Table.HeadCell className="text-nowrap">date</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.data.map((item) => (
              <Table.Row
                key={item.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  <span className="capitalize">{item.name}</span>
                </Table.Cell>
                <Table.Cell>
                  <span className="lowercase">{item.name}</span>
                </Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>
                  <span className="font-bold">{item.amount}</span>
                </Table.Cell>
                <Table.Cell>
                  <span className="uppercase">{item.transaction_type}</span>
                </Table.Cell>
                <Table.Cell>
                  {new Date(item.date).toLocaleDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="flex overflow-x-auto sm:justify-center mt-5">
        <Pagination
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={handlePagination}
        />
      </div>
    </div>
  );
};

export default TransactionHistoryAdmin;
