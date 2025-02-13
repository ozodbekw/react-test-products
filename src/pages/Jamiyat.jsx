import Ads from "../components/Ads";
import NavBottomList from "../components/NavBottomList";
import NavLists from "../components/NavLists";

function Jamiyat() {
  return (
    <div className="container">
      <Ads />
      <NavLists />
      <NavBottomList />
      <h1 className="mx-auto mt-4 text-4xl font-bold">Jamiyat Sahifasi</h1>
    </div>
  );
}

export default Jamiyat;
