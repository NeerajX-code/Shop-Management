import { Cuboid } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Files } from 'lucide-react';
import RevenueChart from "../../components/RevenueChart.jsx"
import { PackagePlus } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';


const OwnerHome = () => {
    const navigate = useNavigate();

    return (
        <div className='OwnerhomeforMob'>
            <div className='ownerHomeTop'>
                <div onClick={() => navigate("/owner/Profile")} className='circle'>
                    <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" alt="" />
                </div>
                <h1>LOGO</h1>
                <button><Bell /></button>
            </div>
            <div className='OwnerSearchBox'>
                <input type="text" placeholder='Search Customer/Products Here' />
            </div>
            <div className='ownerId'>
                <h2>Shop106</h2>
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