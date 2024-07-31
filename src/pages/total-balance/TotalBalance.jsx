import { Card, Spinner } from "flowbite-react";
import { useGetSingleUserQuery } from "../../services/usersApi";

const TotalBalance = () => {
  const { isLoading, data: user } = useGetSingleUserQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <div className="mt-20">
      <Card className="max-w-3xl mx-auto py-14 w-full" color="">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
            Total Balance
          </h1>
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold">
            {user.balance}tk
          </h3>
        </div>
      </Card>
    </div>
  );
};

export default TotalBalance;

/**
 *  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    dispatch({ type: "loading", value: true });
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/users/66963671cb96d16d16c3f4bd"
      );

      if (data) {
        dispatch({ type: "success", data });
        dispatch({ type: "loading", value: false });
        dispatch({ type: "error", value: "", isError: false });
      }
    } catch (e) {
      console.log(e);

      dispatch({ type: "loading", value: false });

      if (e.response.status === 404) {
        dispatch({ type: "error", value: "User not found!", isError: true });
      }
    }
  };
  console.log(state);



  
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  data: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: action.value,
      };
    }
    case "error": {
      return {
        ...state,
        error: action.value,
        isError: action.isError,
      };
    }
    case "success": {
      return {
        ...state,
        data: action.data,
      };
    }
  }
};
 */
