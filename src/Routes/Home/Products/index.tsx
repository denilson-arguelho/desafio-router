import { Outlet } from "react-router-dom"
import SubNav from "../../../components/SubNav"



const Products = () => {
  return (
    <div>
      <SubNav/>
      <Outlet/>
    </div>
  )
}

export default Products