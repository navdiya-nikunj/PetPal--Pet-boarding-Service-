import PawPrintIcon from "../assets/pawPringIcon";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isLoggedIn, role, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary ">
        <Link to={"/"} className="flex items-center justify-center">
          <PawPrintIcon className="h-6 w-6" />
          <span className="ml-5 text-xl font-bold">PetPal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 justify-center items-center">
          <Link
            to={"/services"}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Services
          </Link>
          {!isLoggedIn && (
            <>
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
                className="text-sm font-medium hover:underline underline-offset-4 bg-secondary"
              >
                Signup
              </Button>
              <Button
                onClick={() => {
                  navigate("/login");
                }}
                className="text-sm font-medium hover:underline underline-offset-4 bg-secondary"
              >
                Login
              </Button>
            </>
          )}
          {isLoggedIn && role === "user" && (
            <>
              <Link
                to={"/booking"}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Booking
              </Link>
              <Link
                to={"/userDashboard"}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Dashboard
              </Link>
              <Button
                onClick={() => {
                  logout();
                }}
                className="text-sm font-medium hover:underline underline-offset-4 bg-secondary"
              >
                LogOut
              </Button>
            </>
          )}{" "}
          {isLoggedIn && role === "admin" && (
            <>
              <Link
                to={"/adminDashboard"}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Dashboard
              </Link>
              <Button
                onClick={() => {
                  logout();
                }}
                className="text-sm font-medium hover:underline underline-offset-4 bg-secondary"
              >
                LogOut
              </Button>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
