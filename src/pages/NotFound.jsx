import { useState } from "react";
import NavLists from "../components/NavLists";
import { Link } from "react-router-dom";

function NotFound() {
  const [file, setFile] = useState("../assets/notFound.svg");
  return (
    <div className="container">
      <NavLists />

      <img
        className="mx-auto mt-10"
        src="https://kun.uz/assets/9daff39f/img/404-img.svg"
        alt="404"
      />

      <div className="mx-auto w-[550px] flex flex-col">
        <h1 className="mx-auto mt-5 text-2xl font-bold">
          Kechirasiz, xatolik yuz berdi. Sahifa topilmadi.
        </h1>
        <Link to="/" className="mx-auto mt-10 btn">
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
