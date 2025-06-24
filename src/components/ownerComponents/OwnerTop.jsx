import React from 'react'
import { Bell } from 'lucide-react'

const OwnerTop = ({user}) => {
  return (
    <>
     <div className='ownerHomeTop'>
                <div onClick={() => navigate("/owner/Profile")} className='circle'>
                    <img src={user?.profileImage ||
                        "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?ga=GA1.1.1792328450.1749652153&semt=ais_hybrid&w=740"
                    } alt="" />
                </div>
                <h1>LOGO</h1>
                <button><Bell fill='white' stroke='white' /></button>
            </div>
            <div className='OwnerSearchBox'>
                <input type="text" placeholder='Search Customer/Products Here' />
            </div>
    </>
  )
}

export default OwnerTop