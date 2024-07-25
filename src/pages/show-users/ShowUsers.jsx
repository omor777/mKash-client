import { Badge, Button, Spinner, Table } from "flowbite-react";
import {
  useGetAllUsersQuery,
  usePatchUserMutation,
} from "../../services/usersApi";
import { toast } from "react-toastify";

const ShowUsers = () => {
  const { data: users, isLoading } = useGetAllUsersQuery();
  const [patchUser, { isLoading: isUpdating }] = usePatchUserMutation();

  const handleApproved = async (id) => {
    try {
      const data = await patchUser({ id }).unwrap();
      console.log(data);
      if (data.success) {
        toast.success("Account has been approved");
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md my-20">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Mobile</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user) => (
            <Table.Row
              key={user._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.mobile_number}</Table.Cell>
              <Table.Cell>
                <Badge className="w-16 justify-center" color={"purple"}>
                  {user.role}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge
                  className="w-24 justify-center"
                  color={
                    user.account_status === "PENDING" ? "warning" : "success"
                  }
                  size={""}
                >
                  {user.account_status}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Button
                  disabled={isUpdating || user.account_status === "APPROVED"}
                  onClick={() => handleApproved(user._id)}
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
  );
};

export default ShowUsers;
