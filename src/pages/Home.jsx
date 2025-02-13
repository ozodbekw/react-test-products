import Ads from "../components/Ads";
import NavBottomList from "../components/NavBottomList";
import NavLists from "../components/NavLists";

function Home() {
  return (
    <div className="container">
      <Ads />
      <NavLists />
      <NavBottomList />
      <hr className="mt-4" />
      <h1 className="mx-auto mt-4 text-4xl font-bold">Home Sahifasi</h1>
    </div>
  );
}

export default Home;
