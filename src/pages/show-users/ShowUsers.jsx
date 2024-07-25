import {
  Badge,
  Button,
  Label,
  Pagination,
  Select,
  Spinner,
  Table,
} from "flowbite-react";
import {
  useGetAllUsersQuery,
  usePatchUserMutation,
} from "../../services/usersApi";
import { toast } from "react-toastify";
import { useReducer } from "react";
import { showUsersReducer } from "./showUsersReducer";

const initialState = {
  page: 1,
  limit: 10,
  search: "",
};

const ShowUsers = () => {
  const [state, dispatch] = useReducer(showUsersReducer, initialState);

  const { data, isLoading } = useGetAllUsersQuery({
    page: state.page,
    limit: state.limit,
    search: state.search,
  });

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

  const handlePagination = (page) => {
    dispatch({
      type: "pagination_control",
      value: page,
    });
  };

  const handlePaginationLimit = (e) => {
    const limit = parseInt(e.target.value);
    dispatch({
      type: "change_pagination_limit",
      value: limit,
    });
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <div className="my-20">
      <div className="overflow-x-auto shadow-md">
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
            {data?.users?.map((user) => (
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
      <div className="mt-8 flex items-center justify-between">
        <div className="flex overflow-x-auto justify-center ">
          <Pagination
            currentPage={state.page}
            totalPages={data.totalPages || 1}
            onPageChange={handlePagination}
            showIcons
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="mb-2 block">
            <Label className="text-lg" htmlFor="limit" value="Limit" />
          </div>
          <Select
            onChange={handlePaginationLimit}
            value={state.limit}
            id="limit"
            required
          >
            <option value={"5"}>5</option>
            <option value={"10"}>10</option>
            <option value={"15"}>15</option>
            <option value={"20"}>20</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ShowUsers;
