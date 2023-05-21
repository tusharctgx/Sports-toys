import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyToys = () => {
  const [alltoysdata, setAllToysdata] = useState([]);
  

  useEffect(() => {
    fetch("https://sports-toys-server-xi.vercel.app/toyscollection")
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

export default MyToys;