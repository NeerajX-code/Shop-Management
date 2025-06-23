import { Filter, Search } from 'lucide-react'
import "../../styles/ownerMyProducts.css"
import Cookies from "js-cookie"
import { asyncGetOwnerProduct } from '../../store/actions/ownerActions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { IndianRupee } from 'lucide-react';

const MyProducts = () => {
    const products = useSelector(state =>state.productReducer.products);;
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const t = Cookies.get('token');
        if (t) {
            dispatch(asyncGetOwnerProduct(t))
                .catch((error) => {
                    console.error("Error fetching products:", error);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);
    if (isLoading) return <Loading />;
    console.log(products)

    const renderProducts = products.map((product) => (
        <div key={product?._id} className="products-box">
            <img src={product?.image} alt={product?.title} />
            <div className="info">
                <p>{product?.title}</p>
                <p>Price: <span><IndianRupee size={12} />{product?.price}</span></p>
                <p>DisCount: <span><IndianRupee size={12} />{product?.discount}</span></p>
            </div>
        </div>
    ));
    return (
        <div className='owner-products'>
            <div className='owner-products__search'>
                <div style={{width:"100%",position:"relative",}}>
                <div className='searchIcon'>
                <Search stroke='white' />
                </div>
                <input
                    type="text"
                    className="owner-products__search-input"
                    placeholder='Search All Of Your Products'
                />
                </div>
                <Filter fill='white' size={30} className="owner-products__search-icon" />
            </div>
            <div className="owner-products__list">
                <div className="owner-products_category">
                    <button>All category</button>
                    <button>Biscuits</button>
                    <button>Chips</button>
                    <button>Soft Drinks</button>
                    <button>Chocolates</button>
                    <button>Bread</button>
                    <button>Dairy</button>
                    <button>Snacks</button>
                    <button>Personal Care</button>
                </div>
                <div className="owner-products_div">
                    {renderProducts}
                </div>
            </div>
        </div>
    )
}

export default MyProducts