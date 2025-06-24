import { Cuboid } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Files } from 'lucide-react';
import RevenueChart from "../../components/RevenueChart.jsx"
import { PackagePlus } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OwnerTop from '../../components/ownerComponents/OwnerTop.jsx';


const OwnerHome = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.userReducer.user);


    return (
        <div className='OwnerhomeforMob'>
           <OwnerTop user={user} />
            <div className='ownerId'>
                <h2>{user?.shopId}</h2>
                <Files stroke='white' />
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
                <NavLink to='/owner/My-products'>
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