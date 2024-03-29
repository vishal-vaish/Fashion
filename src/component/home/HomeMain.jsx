import "./HomeMain.css";
import HomeInfo from "./HomeInfo.jsx";
import HomePhotoShoot from "./HomePhotoShoot.jsx";

const HomeMain = () => {
  return(
    <main className="home-main container">
      <HomeInfo/>
      <HomePhotoShoot/>
    </main>
  )
}
export default HomeMain;