import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.headerCont}>
      <p>Justinas Pakalnis R.E.A.C.T. & SQL</p>
    </header>
  );
};
export default Header;
