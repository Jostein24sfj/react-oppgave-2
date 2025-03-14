import "./App.css";
import CookieClicker from "./Components/cookieclicker/CookieClicker.jsx";
// import CatInfo from "./components/catinfo/CatInfo.jsx";
// import UserComponent from "./components/userComponent/UserComponent.jsx";
export default function App() {
  return (
    <>
      <div>
        <h1>Cookie Clicker</h1>
        <CookieClicker />
        {/* <catinfo.jsx />
        <UserComponent /> */}
        <div className="cookieImg"></div>
      </div>
    </>
  );
}
