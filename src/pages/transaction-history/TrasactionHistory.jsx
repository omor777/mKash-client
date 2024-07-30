import { useTransactionHistoryAgentQuery } from "../../services/transaction";
import { Badge, Spinner, Table } from "flowbite-react";
const TransactionHistory = () => {
  const { data, isLoading } = useTransactionHistoryAgentQuery();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size={"xl"} />
      </div>
    );
  }
  console.log(data);

  return (
    <div className="my-20">
      <div className="overflow-x-auto shadow-md">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Mobile</Table.HeadCell>
            <Table.HeadCell>amount</Table.HeadCell>
            <Table.HeadCell>Transaction type</Table.HeadCell>
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
                  <span className="lowercase">{item.email}</span>
                </Table.Cell>
                <Table.Cell>{item.mobile_number}</Table.Cell>
                <Table.Cell>
                  <span className="font-bold">{item.amount}</span>
                </Table.Cell>
                <Table.Cell>
                  <Badge className="w-20 justify-center text-black" color={item.transaction_type === 'cashIn' ? 'pink' : 'success'}>
                    <span className="uppercase">{item.transaction_type}</span>
                  </Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default TransactionHistory;
