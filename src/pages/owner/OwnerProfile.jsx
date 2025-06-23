import { useDispatch, useSelector } from "react-redux";
import "../../styles/ownerProfile.css"
import { Pencil, Check } from "lucide-react"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../../Utils/axios";
import Cookies from "js-cookie";
import { asyncUserProfile } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { loaduser } from "../../store/reducers/userSlice";
import Loading from "../../components/Loading";


const OwnerProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user)
    const [isAcitve, setActive] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(true);
    const token = Cookies.get("token");
    const navigate = useNavigate();
    const SubmitHandler = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("address", data.address);
            formData.append("shopName", data.shopName);
            formData.append("phoneNumber", data.phoneNumber);
            if (data.profileImage && data.profileImage[0]) {
                formData.append("profileImage", data.profileImage[0]);
            }

            const res = await axios.put(
                "/owner/update-profile",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    },
                }
            );
            if (res) {
                dispatch(asyncUserProfile(token));
                setActive(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (loading) <Loading />

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            dispatch(asyncUserProfile(token)).finally(() => setLoading(false));
        } else {
            dispatch(loaduser(null))
            setLoading(false);
        }
    }, [])


    return (
        <div className='ownerProfile'>

            {(() => {
                const Tag = isAcitve ? "form" : "section";
                return (
                    <Tag
                        className="profile-info"
                        {...(isAcitve ? { onSubmit: handleSubmit(SubmitHandler) } : {})}
                    >
                        {isAcitve ? (
                            <button type="submit" className="edit-button">
                                Submit<Check size={16} />
                            </button>
                        ) : (
                            <button onClick={() => setActive(true)} className="edit-button">
                                Edit <Pencil size={16} fill="orange" />
                            </button>
                        )}
                        <section className="img">
                            <label htmlFor="profile-img-upload" style={{ cursor: isAcitve ? "pointer" : "default" }}>
                                <img
                                    src={user?.profileImage ||
                                        "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?ga=GA1.1.1792328450.1749652153&semt=ais_hybrid&w=740"
                                    }
                                    style={{ opacity: isAcitve ? 0.7 : 1 }}
                                />
                                {isAcitve && (
                                    <input
                                        id="profile-img-upload"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        {...register("profileImage")}
                                    />
                                )}
                            </label>
                        </section>
                        <p>
                            <span>ShopID</span>
                            <span className="profile-data">{user?.shopId}</span>
                        </p>
                        <p>
                            <span>Name</span>
                            {!isAcitve ? (
                                <span className="profile-data">{user?.name}</span>
                            ) : (
                                <input
                                    type="text"
                                    className="profile-data input"
                                    defaultValue={user?.name}
                                    {...register("name")}
                                />
                            )}
                        </p>
                        <p>
                            <span>email </span>
                            {!isAcitve ? (
                                <span className="profile-data">{user?.email}</span>
                            ) : (
                                <input
                                    type="email"
                                    className="profile-data input"
                                    defaultValue={user?.email}
                                    {...register("email")}
                                />
                            )}
                        </p>
                        <p>
                            <span>address</span>
                            {!isAcitve ? (
                                <span className="profile-data">{user?.address}</span>
                            ) : (
                                <input
                                    type="text"
                                    className="profile-data input"
                                    defaultValue={user?.address}
                                    {...register("address")}
                                />
                            )}
                        </p>
                        <p>
                            <span>ShopName</span>
                            {!isAcitve ? (
                                <span className="profile-data">{user?.shopName}</span>
                            ) : (
                                <input
                                    type="text"
                                    className="profile-data input"
                                    defaultValue={user?.shopName}
                                    {...register("shopName")}
                                />
                            )}
                        </p>
                        <p>
                            <span>PhoneNumber</span>
                            {!isAcitve ? (
                                <span className="profile-data">
                                    {user?.phoneNumber ? user.phoneNumber : "0000"}
                                </span>
                            ) : (
                                <input type="text"
                                    className="profile-data input"
                                    defaultValue={user?.phoneNumber}
                                    {...register("phoneNumber")}
                                />
                            )}
                        </p>
                    </Tag>
                );
            })()}
            <button className="changePassword">
                Change Password
            </button>
            <button onClick={() => {
                Cookies.remove("token");
                dispatch(loaduser([]));
                navigate("/");
            }} className="logout">
                Logout
            </button>
        </div>
    )
}

export default OwnerProfile