import { Cuboid } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Files } from 'lucide-react';
import RevenueChart from "../../components/RevenueChart.jsx"
import { PackagePlus } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const OwnerHome = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.userReducer.user);


    return (
        <div className='OwnerhomeforMob'>
            <div className='ownerHomeTop'>
                <div onClick={() => navigate("/owner/Profile")} className='circle'>
                    <img src={user?.profileImage ||
                        "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?ga=GA1.1.1792328450.1749652153&semt=ais_hybrid&w=740"
                    } alt="" />
                </div>
                <h1>LOGO</h1>
                <button><Bell /></button>
            </div>
            <div className='OwnerSearchBox'>
                <input type="text" placeholder='Search Customer/Products Here' />
            </div>
            <div className='ownerId'>
                <h2>{user?.shopId}</h2>
                <Files />
            </div>
            <div className='ownerDashBoard'>
                <div className='ownerTask'>
                    <div><p>upcoming Order</p></div>
                    <div><p>Pickups</p></div>
                    <div><p>Visits</p></div>
                </div>
                <RevenueChart />
            </div>
            <div className='ownerProduct'>
                <NavLink to=''>
                    <button style={{ display: "flex", gap: "4px", alignItems: "center" }}><Cuboid />My Products</button>
                </NavLink>
                <NavLink to='/owner/Create-products'>
                    <button style={{ display: "flex", gap: "4px", alignItems: "center" }}><PackagePlus />Create Products</button></NavLink>
            </div>
            <div className='anouncement'>
                <p>Anouncement Banner</p>
            </div>
        </div>
    )
}

export default OwnerHome