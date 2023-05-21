import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [alltoysdata, setAllToysdata] = useState([]);
  const [items, setItems] = useState(alltoysdata);



  useEffect(() => {
    fetch("https://sports-toys-server-xi.vercel.app/toyscollection")
      .then((res) => res.json())
      .then((data) => setAllToysdata(data));
  }, []);


  const filterItem = (categItem) => {
    const updateItems = alltoysdata.filter((curElem) => {
      console.log(curElem);
      return curElem.Category == categItem
     
    });
    setItems(updateItems);
    
  }

  console.log(alltoysdata);
  return (
    <>
      <h1 className="text-5xl pt-20 text-center font-bold">
        CHECK YOUR FAVORITE TOYS!
      </h1>
      <div className="grid justify-items-center mt-10 pb-10">
        <div className="tabs gap-6">
          <button className=" btn btn-accent text-white" onClick={() => filterItem('FOOTBALL') }>FOOTBALL</button>
          <button className=" btn btn-accent text-white" onClick={() => filterItem('CRICKET') }>CRICKET</button>
          <button className=" btn btn-accent text-white" onClick={() => filterItem('BOXING') }>BOXING</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mb-10 mt-10">
      {items.map((toy) => (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10 ">
          <img
            src={toy.Url}
            className="object-fill h-48 w-52 rounded-2xl"
          />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title text-3xl"></h2>
          <p className="text-xl text-cyan-600">NAME : {toy.name}</p>
          <p>Price : {toy.Price} </p>
          <p>Rating : {toy.Rating} </p>

          <div className="card-actions">
            <button className="btn ">
              <Link to={`/details/${toy._id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
      ))}
      </div>
    </>
  );
};

export default Category;
