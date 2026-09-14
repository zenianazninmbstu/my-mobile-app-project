
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { useEffect } from "react";

type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};



const TechnologyCard = () => {

    const [technologies, setTechnologies] = useState<Technology[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/data/technologies.json")
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);



    const [selectedTechnologies, setSelectedTechnologies] = useState<any[]>([]);

    const handleAddToStack = (technology: any) => {
  const alreadySelected = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  if (alreadySelected) {
    console.log("Warning test");
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setSelectedTechnologies([...selectedTechnologies, technology]);

  toast.success(`${technology.name} added to your stack!`);
};




const handleRemoveAll = () => {
  setSelectedTechnologies([]);
  toast.success("All technologies removed!");
};
    
return (
<>
    <ToastContainer position="top-right" />

    {loading ? (
  <div className="text-center py-20 text-gray-500">
    Loading technologies...
  </div>
) : (

<div className= "max-w-7xl mx-auto mt-3 px-0 py-2">

    {/* heading section */}
    <div >
      
      <h2 className="text-3xl font-bold">
        Explore the{" "}
        <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text
        text-transparent'>Technologies</span>
      </h2>

      <p className="text-gray-500 mt-2">
        Pick one technology per category to build your idea stack.
      </p>

    </div>


{/* card section */}

<div className="flex flex-col lg:flex-row gap-8 mt-8">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 flex items-start">
    {technologies.map((technology) => (
    <div
      key={technology.id}
      className="border border-gray-200 rounded-2xl p-6 relative"
    >

        <img
  src={technology.icon}
  alt={technology.name}
  className="w-12 h-12"
/>

{/* badge */}

<span className="badge bg-orange-100 text-orange-600 absolute top-4 right-4">
  {technology.badge}
</span>

{/* Name */}
  <h3 className="text-xl font-bold mt-4">
    {technology.name}
  </h3>

{/* description */}
  <p className="text-gray-500 text-sm mt-2 leading-6 min-h-[72px]">
    {technology.description}
  </p>


  
<div className='flex items-center justify-between mt-4'>

 {/* category chip */}
<span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mt-4">
  {technology.category}
</span>
      
     
      {/* Difficulty */}

<p className="text-sm text-gray-500 mt-3">
   <span className="font-sm text-gray-700">{technology.difficulty}</span>
</p>


{/* rating */}
<p className="text-sm mt-3">
  <span className="text-yellow-500">★</span>{" "}
  <span className="font-semibold">{technology.rating}</span>
</p>

</div>
{/* button */}

<button
  onClick={() => handleAddToStack(technology)}
  disabled={selectedTechnologies.some(
    (item) => item.id === technology.id
  )}
  className="w-full mt-5 py-2 rounded-lg bg-black text-white font-medium
   disabled:bg-gray-300 disabled:text-gray-500"
>
  {selectedTechnologies.some(
    (item) => item.id === technology.id
  )
    ? "✓ Added to Stack"
    : "Add to Stack"}
</button>



 </div>
))}
</div>

{/* your stack */}


<div className="w-full lg:w-[260px] min-h-[320px] lg:flex-shrink-0 self-start border border-gray-200 rounded-2xl p-4">
  <h3 className="text-xl font-bold">
    Your Stack
  </h3>

<p className="text-gray-500 text-sm mt-2">
  {selectedTechnologies.length === 0
    ? "No technology selected yet."
    : `${selectedTechnologies.length} Technology Selected`}
</p>
  {selectedTechnologies.map((technology) => (
    <div
      key={technology.id}
      className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 mt-3"
    >
      <img
        src={technology.icon}
        alt={technology.name}
        className="w-10 h-10"
      />

      <div className="flex-1">
        <h4 className="font-semibold text-sm">
          {technology.name}
        </h4>

        <p className="text-xs text-gray-500">
          {technology.category}
        </p>
      </div>

     <button
  onClick={() => {
    setSelectedTechnologies(
      selectedTechnologies.filter(
        (item) => item.id !== technology.id
      )
    );
    toast.success(`${technology.name} removed from your stack!`);
  }}
  className="text-gray-400 hover:text-red-500 font-bold"
>
  ✕
</button>
    </div>
  ))}

  {selectedTechnologies.length === 0 && (
  <div className="mt-20 w-full border border-dashed border-gray-300 rounded-xl py-8 text-center">
    <p className="text-sm font-medium text-gray-600">
      Your Stack is Empty
    </p>
  </div>
)}


  {selectedTechnologies.length > 0 && (
  <button
    onClick={handleRemoveAll}
    className="w-full mt-4 py-2 rounded-lg border border-red-300 text-red-500 font-medium hover:bg-red-50"
  >
    Remove All
  </button>
)}
</div>
</div>
</div>
)}
</>
);
};
export default TechnologyCard;