import { X } from 'lucide-react';
import  { useEffect } from 'react'
import { useForm } from "react-hook-form";

const UpdateForm = (props) => {
    const { product, setActive } = props;
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: product?.title || "",
            price: product?.price || "",
            description: product?.description || "",
            discount: product?.discount || "",
        }
    });


    const onSubmit = (data) => {
        // handle update logic here
        console.log(data);
    };

    useEffect(() => {
            reset({
                title: product?.title || "",
                price: product?.price || "",
                description: product?.description || "",
                discount: product?.discount || "",
            });
        }, [product, reset]);


    return (
        <div className="updateProduct">
            <div onClick={() => setActive(false)} className="close">
                <X />
            </div>
            <form className='UpdateForm' onSubmit={handleSubmit(onSubmit)}>
                <div>
                     <label>Product Image:</label>
                    <input type="file" {...register("image")} />
                </div>
                <div>
                    <label>Name:</label>
                    <input
                        {...register("title")}
                        type="text"
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        {...register("price", { required: "Price is required" })}
                        type="number"
                        step="0.01"
                    />
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                    <label>Discount:</label>
                    <textarea
                        {...register("discount")}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        {...register("description")}
                    />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>

    );
}

export default UpdateForm