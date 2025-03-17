import "./App.css";
import CookieClicker from "./Components/cookieclicker/CookieClicker.jsx";
import CatInfo from "./components/catinfo/catInfo.jsx";
import UserComponent from "./components/userComponent/UserComponent.jsx";
export default function App() {
  return (
    <>
      <UserComponent />
      <br />
      <br />
      <br />
      <CatInfo />
      <br />
      <br />
      <br />
      <CookieClicker />
    </>
  );
}
