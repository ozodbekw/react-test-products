import { Link } from "react-router-dom";

function NavLists() {
  return (
    <div className="bg-white rounded-md mt-4 navbar mb-4 px-6 py-[14px]">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="37"
              fill="none"
            >
              <ellipse
                cx="73.76"
                cy="18.433"
                fill="#0C2F75"
                rx="18.239"
                ry="18.433"
              />
              <ellipse
                cx="49.862"
                cy="24.788"
                fill="#0C2F75"
                rx="1.887"
                ry="1.907"
              />
              <path
                fill="#0C2F75"
                fill-rule="evenodd"
                d="M45.778 10.583h-4.313V19.9l-6.515-9.423H30.96v16.219h4.323l-.052-8.78 6.567 8.906h3.979v-16.24ZM8.322 18.475l6.254 8.22h-5.43L4.49 20.132h-.167v6.563H0V10.582h4.323v6.712h.115l4.396-6.712h4.99l-5.502 7.893Zm13.69 8.621c-4.157 0-7.018-2.754-7.018-6.732v-9.782h4.323v9.793c0 1.635 1.117 2.764 2.694 2.764 1.587 0 2.704-1.129 2.704-2.754v-9.803h4.323v9.782c0 3.978-2.86 6.732-7.027 6.732Z"
                clip-rule="evenodd"
              />
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M60.212 20.364c0 3.978 2.86 6.732 7.017 6.732 4.166 0 7.027-2.754 7.027-6.732v-9.782h-4.323v9.803c0 1.625-1.117 2.755-2.704 2.755-1.577 0-2.694-1.13-2.694-2.765v-9.793h-4.323v9.782Zm21.656-5.898-6.65 12.23h13.27v-3.894h-6.15l6.62-12.22H76.47v3.884h5.398Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="font-bold" to="/ozbekiston">O'zbekiston</Link>
            </li>
            <li>
              <Link className="font-bold" to="/jahon">Jahon</Link>
            </li>
            <li>
              <Link className="font-bold" to="/iqtisodiyot">Iqtisodiyot</Link>
            </li>
            <li>
              <Link className="font-bold" to="/jamiyat">Jamiyat</Link>
            </li>
            <li>
              <Link className="font-bold" to="/sport">Sport</Link>
            </li>
            <li>
              <Link className="font-bold" to="/fanTehnika">Fan-texnika</Link>
            </li>
            <li>
              <Link className="font-bold" to="/nuqtayiNazar">Nuqtayi nazar</Link>
            </li>
            <li>
              <Link className="font-bold" to="/audio">Audio</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="hidden p-1 btn btn-ghost md:block">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="37"
            fill="none"
          >
            <ellipse
              cx="73.76"
              cy="18.433"
              fill="#0C2F75"
              rx="18.239"
              ry="18.433"
            />
            <ellipse
              cx="49.862"
              cy="24.788"
              fill="#0C2F75"
              rx="1.887"
              ry="1.907"
            />
            <path
              fill="#0C2F75"
              fill-rule="evenodd"
              d="M45.778 10.583h-4.313V19.9l-6.515-9.423H30.96v16.219h4.323l-.052-8.78 6.567 8.906h3.979v-16.24ZM8.322 18.475l6.254 8.22h-5.43L4.49 20.132h-.167v6.563H0V10.582h4.323v6.712h.115l4.396-6.712h4.99l-5.502 7.893Zm13.69 8.621c-4.157 0-7.018-2.754-7.018-6.732v-9.782h4.323v9.793c0 1.635 1.117 2.764 2.694 2.764 1.587 0 2.704-1.129 2.704-2.754v-9.803h4.323v9.782c0 3.978-2.86 6.732-7.027 6.732Z"
              clip-rule="evenodd"
            />
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M60.212 20.364c0 3.978 2.86 6.732 7.017 6.732 4.166 0 7.027-2.754 7.027-6.732v-9.782h-4.323v9.803c0 1.625-1.117 2.755-2.704 2.755-1.577 0-2.694-1.13-2.694-2.765v-9.793h-4.323v9.782Zm21.656-5.898-6.65 12.23h13.27v-3.894h-6.15l6.62-12.22H76.47v3.884h5.398Z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link className="font-bold" to="/ozbekiston">O'zbekiston</Link>
          </li>
          <li>
            <Link className="font-bold" to="/jahon">Jahon</Link>
          </li>
          <li>
            <Link className="font-bold" to="/iqtisodiyot">Iqtisodiyot</Link>
          </li>
          <li>
            <Link className="font-bold" to="/jamiyat">Jamiyat</Link>
          </li>
          <li>
            <Link className="font-bold" to="/sport">Sport</Link>
          </li>
          <li>
            <Link className="font-bold" to="/fanTehnika">Fan-texnika</Link>
          </li>
          <li>
            <Link className="font-bold" to="/nuqtayiNazar">Nuqtayi nazar</Link>
          </li>
          <li>
            <Link className="font-bold" to="/audio">Audio</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <g clip-path="url(#a)">
              <path
                fill="#242833"
                d="M10 1.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5Zm7.5 8.125h-3.75a15.164 15.164 0 0 0-1.744-6.594A7.5 7.5 0 0 1 17.5 9.375ZM10 17.5c-.14.01-.28.01-.419 0A13.656 13.656 0 0 1 7.5 10.625h5a13.657 13.657 0 0 1-2.063 6.875c-.145.01-.291.01-.437 0ZM7.5 9.375A13.656 13.656 0 0 1 9.563 2.5a3.75 3.75 0 0 1 .837 0 13.657 13.657 0 0 1 2.1 6.875h-5Zm.475-6.594A15.163 15.163 0 0 0 6.25 9.375H2.5a7.5 7.5 0 0 1 5.494-6.594h-.019Zm-5.444 7.844h3.75c.065 2.3.653 4.555 1.719 6.594a7.5 7.5 0 0 1-5.469-6.594Zm9.475 6.594a15.164 15.164 0 0 0 1.744-6.594h3.75a7.5 7.5 0 0 1-5.494 6.594Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z" />
              </clipPath>
            </defs>
          </svg>
          O'zbekcha
        </a>
        {/* <label className="swap swap-rotate">
          
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

         
          <svg
            className="w-10 h-10 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

         
          <svg
            className="w-10 h-10 fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label> */}
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </div>
  );
}

export default NavLists;
