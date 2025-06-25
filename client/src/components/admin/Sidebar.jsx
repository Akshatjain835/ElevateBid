import { Caption, CustomNavLink, Title } from "../common/Design";
import { CiGrid41 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { User1 } from "../hero/Hero";
import { IoIosLogOut } from "react-icons/io";
import { CgProductHunt } from "react-icons/cg";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RESET } from "../../redux/features/authSlice";
import { logout } from "../../redux/features/authSlice";
import { toast } from "react-toastify";

export const Sidebar = () => {
  const location = useLocation();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  

  const role = "admin";
  const className = "flex items-center gap-3  p-4 rounded-full";

  const logoutUser=async()=>{
    dispatch(RESET())
    await dispatch(logout())
    toast.success("Logout successfull")
    navigate("/")
  }

  return (
    <>
      <section className="sidebar flex flex-col justify-between h-full">
        <div className="profile flex items-center text-center justify-center gap-2 flex-col ">
          <img src={User1} alt="" className="w-32 h-32 rounded-full object-cover" />
          <div>
            <Title className="capitalize">Akshat</Title>
            <Caption>example@gmail.com</Caption>
          </div>
        </div>

        <div>
          <CustomNavLink href="/dashboard" isActive={location.pathname === "/dashboard"} className={className}>
            <span>
              <CiGrid41 size={22} />
            </span>
            <span>Dashbaord</span>
          </CustomNavLink>

          {(role === "seller" || role === "admin") && (
            <>
              <CustomNavLink href="/product" isActive={location.pathname === "/product"} className={className}>
                <span>
                  <MdOutlineCategory size={22} />
                </span>
                <span>My Products</span>
              </CustomNavLink>
              <CustomNavLink href="/add" isActive={location.pathname === "/add"} className={className}>
                <span>
                  <FaPlusCircle size={22} />
                </span>
                <span>Create Product</span>
              </CustomNavLink>

              {/* do it  */}
            </>
          )}

          {role === "admin" && (
            <>
              <CustomNavLink href="/userlist" isActive={location.pathname === "/userlist"} className={className}>
                <span>
                  <FiUser size={22} />
                </span>
                <span>All User</span>
              </CustomNavLink>

              <CustomNavLink href="/product/admin" isActive={location.pathname === "/product/admin"} className={className}>
                <span>
                  <CgProductHunt size={22} />
                </span>
                <span> All product List</span>
              </CustomNavLink>

              <CustomNavLink href="/category" isActive={location.pathname === "/category"} className={className}>
                <span>
                  <MdOutlineCategory size={22} />
                </span>
                <span>Categories</span>
              </CustomNavLink>
              <CustomNavLink href="/admin/income" isActive={location.pathname === "/admin/income"} className={className}>
                <span>
                  <TbCurrencyDollar size={22} />
                </span>
                <span>Income</span>
              </CustomNavLink>
            </>
          )}

          <CustomNavLink href="/winning-products" isActive={location.pathname === "/winning-products"} className={className}>
            <span>
              <RiAuctionLine size={22} />
            </span>
            <span>Winning Bids</span>
          </CustomNavLink>
          <CustomNavLink href="/favorites" isActive={location.pathname === "/favorites"} className={className}>
            <span>
              <IoIosHeartEmpty size={22} />
            </span>
            <span>My Favorites</span>
          </CustomNavLink>
          <CustomNavLink href="/profile" isActive={location.pathname === "/profile"} className={className}>
            <span>
              <IoSettingsOutline size={22} />
            </span>
            <span>Personal Profile</span>
          </CustomNavLink>

          <button className="flex items-center w-full gap-3 mt-4 bg-red-500 mb-3 hover:text-white p-4 rounded-full text-white" onClick={logoutUser}>
            <span>
              <IoIosLogOut size={22} />
            </span>
            <span>Log Out</span>
          </button>
        </div>
      </section>
    </>
  );
};