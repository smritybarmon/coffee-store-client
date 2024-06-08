import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((c) => c._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="card card-side text-black shadow-xl bg-stone-300">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className=" flex justify-between w-full p-2">
          <div className="w-1/2">
            <h2 className="card-title">{name}</h2>
            <p>Quantity:{quantity}</p>
            <p>Supplier: {supplier}</p>
            <p> Taste: {taste}</p>
            <p>Category: {category}</p>
          </div>

          <div className="card-actions justify-end">
            <div className="join join-vertical">
              <button className="btn join-item mb-5">view</button>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn join-item mb-5">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-700"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
