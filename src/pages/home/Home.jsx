import { useSelector } from "react-redux";
import UserHome from "./user-home/UserHome";
import { selectUser } from "../../features/auth/authSelectors";

const Home = () => {
  const user = useSelector(selectUser);

  return (
    <div className="my-20">
      {user?.role === "USER" && (
        <div className="w-full">
          <UserHome />
        </div>
      )}
    </div>
  );
};

export default Home;
