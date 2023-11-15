import "./styles.css";

import { ProductDTO } from "../../models/Product";




 const product: ProductDTO ={
    name: "Monitor Gamer",
    imgUrl: "https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_1280.png"
 }


const CardProductEletronics = () => {
  return (
    <div>
      <div className="ds-card-container">
        <div className="ds-img-container-top">
          <img src={product.imgUrl} alt="computador gamer" />
        </div>
        <div className="ds-description-container-bottom">
          <p>{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProductEletronics;
