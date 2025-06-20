import { useDispatch } from "react-redux"
import { asyncCreateProduct } from "../../store/actions/ownerActions"
import { useForm } from "react-hook-form"
import "../../styles/createProduct.css"

export default function CreateProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]); // File input is an array
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("discount", data.discount);
    console.log(formData)
    dispatch(asyncCreateProduct(formData));
  }

  return (
    <>
      <div className="create-product">
        <form onSubmit={handleSubmit(onSubmit)} className="create-product-form">
          <div className="form-group">
            <label>Product Image</label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
            />
            {errors.file && <p className="error">{errors.file.message}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product Name"
              {...register("title", { required: "Name is required" })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Price"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && <p className="error">{errors.price.message}</p>}
          </div>

          <input
            type="text"
            placeholder="Enter Description"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <p className="error">{errors.description.message}</p>}

          <input
            type="text"
            placeholder="Enter Discount"
            {...register("discount")}
          />
          {errors.discount && <p className="error">{errors.discount.message}</p>}


          <input type="submit" value={"Create Product"} />
        </form>
      </div>
    </>

  )
}