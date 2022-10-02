import { Dropdown, Menu } from "antd";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../redux/slice/userSlice";
import { removeBasket } from "../redux/slice/basketSlice";

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const signout = () => {
    dispatch(signOut());
    dispatch(removeBasket());
    history.push("/");
  };

const {user} = useAppSelector((state) => state.user);

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      {user?.roles?.includes('Instructor') &&(
      <Menu.Item>
        <Link to="/instructor">Instructor</Link>
      </Menu.Item>
      )}
      <Menu.Item>
        <div onClick={signout}>Logout</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottom">
      <div className="dropdown">Menu</div>
    </Dropdown>
  );
};

export default UserMenu;