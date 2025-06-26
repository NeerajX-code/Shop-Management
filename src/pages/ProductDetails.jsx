import { ChevronLeft, Edit, IndianRupee } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/productDetails.css"
import UpdateForm from '../components/ownerComponents/UpdateForm';
import { useState } from 'react';



const ProductDetails = () => {
    let {id} = useParams();
    console.log(id)
    let user = useSelector(stata => stata.userReducer.user);
    let products = useSelector(state => state.productReducer.products);
    let filterProduct = products.filter((product) => product._id == id);
    console.log(user);
    console.log(filterProduct[0]);
    let navigate = useNavigate();
    const [isactive, setActive] = useState(false)
    
return (
 <div className='productDetails'>
    <nav>
        <button className='back' onClick={()=> navigate(-1)}><ChevronLeft /></button>
        <h2>{filterProduct[0]?.title}</h2>
    </nav>
    <div className="image">
        <img src={filterProduct[0]?.image} alt="" />
    </div>
    <div className="description">
        <div className="top">
            <button>Description</button>{user?.role === "owner" && <>
          <div onClick={() => setActive(true)} className="edit">
             <Edit stroke='white' />
          </div>
        </>}
        </div>
        <h2>{filterProduct[0]?.title}</h2>
        <p>{filterProduct[0]?.description}</p>
        <h2 style={{display:"flex",alignItems:"center"}}>Price : <IndianRupee />{filterProduct[0]?.price}</h2>
        <h2 style={{display:"flex",alignItems:"center"}}>Discount : <IndianRupee />{filterProduct[0]?.discount}</h2>
        
        {user?.role === "consumer" && <>
        <div className="addToCart">
             <p><IndianRupee />{filterProduct[0]?.price}</p>
             <button>Add to Cart</button>
        </div>
        </>}
        {user?.role === "owner" && <>
        <div className="deleteProduct">
             <button>Delete Product</button>
        </div>
        </>}
    </div>
    {isactive && <UpdateForm product={filterProduct[0]} setActive={setActive} /> }  
 </div>
)
}

export default ProductDetails