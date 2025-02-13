import { Link } from "react-router-dom";

function NavLists() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
              <Link to="/">O'zbekiston</Link>
            </li>
            <li>
              <Link to="/jahon">Jahon</Link>
            </li>
            <li>
              <Link to="/iqtisodiyot">Iqtisodiyot</Link>
            </li>
            <li>
              <Link to="/jamiyat">Jamiyat</Link>
            </li>
            <li>
              <Link to="/sport">Sport</Link>
            </li>
            <li>
              <Link to="/fanTehnika">Fan-texnika</Link>
            </li>
            <li>
              <Link to="/nuqtayiNazar">Nuqtayi nazar</Link>
            </li>
            <li>
              <Link to="/audio">Audio</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl btn btn-ghost">
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
            <Link to="/ozbekiston">O'zbekiston</Link>
          </li>
          <li>
            <Link to="/jahon">Jahon</Link>
          </li>
          <li>
            <Link to="/iqtisodiyot">Iqtisodiyot</Link>
          </li>
          <li>
            <Link to="/jamiyat">Jamiyat</Link>
          </li>
          <li>
            <Link to="/sport">Sport</Link>
          </li>
          <li>
            <Link to="/fanTehnika">Fan-texnika</Link>
          </li>
          <li>
            <Link to="/nuqtayiNazar">Nuqtayi nazar</Link>
          </li>
          <li>
            <Link to="/audio">Audio</Link>
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
