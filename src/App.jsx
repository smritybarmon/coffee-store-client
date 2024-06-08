import { useLoaderData } from "react-router";
import "./App.css";
import CoffeeCard from "./commponent/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);
  return (
    <div className="bg-gray-200">
      <h1 className="text-4xl text-purple-600 text-center py-5">
        Hot coffees {coffees.length}
      </h1>
      <div className="grid grid-cols-2 gap-4 px-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
