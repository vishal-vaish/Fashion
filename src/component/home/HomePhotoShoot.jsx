import "./HomePhotoShoot.css";
import photo1 from "../../assets/images/home-photo-1.webp"
import photo2 from "../../assets/images/home-photo-2.webp"
import photo3 from "../../assets/images/home-photo-3.webp"

const HomePhotoShoot = () => {
  return (
    <div className="photoshoot-container">
      <span className="model-photo_wrapper boy">
        <img src={photo1} className="model-photo" alt="model photo"/>
      </span>
      <span className="model-photo_wrapper boy">
              <img src={photo2} className="model-photo" alt="model photo"/>
            </span>
      <span className="model-photo_wrapper boy">
              <img src={photo3} className="model-photo" alt="model photo"/>
            </span>
    </div>
  )
}
export default HomePhotoShoot;