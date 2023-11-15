import "./styles.css";

import { ProductDTO } from "../../models/Product";




 const product: ProductDTO ={
    name: "Computador Gamer",
    imgUrl: "https://cdn.pixabay.com/photo/2022/06/15/02/03/laptop-7263006_1280.png"
 }


const CardProductComputer = () => {
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

export default CardProductComputer;
