import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const UpdatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(UpdatedCoffee);
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedcount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successuly",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className=" p-20">
      <h2 className="text-3xl font-medium pl-20 pb-10">
        Update Coffee : {name}
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        {/*form name and quantity row*/}
        <div className="md:flex">
          <label className="form-control md:w-1/2 px-2 ">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2  px-2">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/*form Supplier and taste row*/}
        <div className="md:flex">
          <label className="form-control md:w-1/2 px-2 ">
            <div className="label">
              <span className="label-text">Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Supplier name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2  px-2">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Taste"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/*form Category and details row*/}
        <div className="md:flex">
          <label className="form-control md:w-1/2 px-2 ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Category name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2  px-2">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Details"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="">
          <label className="form-control w-full px-2 ">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input type="submit" value="Update" className="btn btn-block mt-6" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
