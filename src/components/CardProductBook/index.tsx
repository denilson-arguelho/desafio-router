import "./styles.css";

import { ProductDTO } from "../../models/Product";




 const product: ProductDTO ={
    name: "Computador Gamer",
    imgUrl: "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088777_1280.png"
 }


const CardProductBook = () => {
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

export default CardProductBook;
