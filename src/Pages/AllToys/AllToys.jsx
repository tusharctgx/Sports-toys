
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {

  const [alltoysdata, setAllToysdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toyscollection")
      .then((res) => res.json())
      .then((data) => setAllToysdata(data));
  }, []);

  console.log(alltoysdata);
  return (

 

    <div className=" align-center  ">
      
      <tr className="text-center mb-10 mt-10 bg-cyan-400 table table-zebra w-full">
        <th>Saller</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>Details</th>
      </tr>
   
    
   
      {alltoysdata.map((toy) => (
    

<div className=" text-center">
  <table className="table table-zebra w-full">
    {/* head */}
   
    <tbody className="text-start">
      {/* row 1 */}
      <tr>
        <td className="w-52" >{toy.Email}</td>
        <td className="w-36" >{toy.name}</td>
        <td className="w-52" >{toy.Category}</td>
        <td className="w-36">{toy.Price}</td>
        <td >{toy.Rating}</td>
        <td className="text-start w-52">{toy.Quantity}</td>
        <td className="text-end w-20" ><button className="btn" ><Link to={`/details/${toy._id}`}>View Details</Link></button></td>
        
      </tr>
      {/* row 2 */}
   
    </tbody>
  </table>
</div>
       
    
     
      ))}
    </div>
  );
};

export default AllToys;



  // <div>
      //     <div className="card w-96 bg-base-100 shadow-xl">
        
      //   <figure className="px-10 pt-10 ">
      //     <img src={toy.picture_url} className="object-fill h-48 w-52 rounded-2xl" />
      //   </figure>
      //   <div className="card-body items-center text-center">
      //     <h2 className="card-title text-3xl">{toy.name}</h2>
      //     <p className="text-xl text-cyan-600" >Catagory : {toy.sub_category}</p>
      //     <p>Price : {toy.price}</p>
      //     <p>Rating : {toy.rating}</p>
      //     <p>Quantity : {toy.available_quantity}</p>
      //     <div className="card-actions">
      //       <button className="btn btn-success">View Details</button>
      //     </div>
      //   </div>
      // </div>
      //  </div>