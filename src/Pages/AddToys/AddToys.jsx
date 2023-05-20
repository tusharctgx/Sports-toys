import { useState } from "react";


const AddToys = () => {
  const [name, setName] = useState(null);
  const [Url, setUrl] = useState(null);
  const [Seller, setSeller] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Price, setPrice] = useState(null);
  const [Rating, setRating] = useState(null);
  const [Quantity, setQuantity] = useState(null);
  const [Category, setCategory] = useState(null);
  const [Details, setDetails] = useState(null);
  

   const handleSubmit = (event) => {
    event.preventDefault();
    const addDetails = {name,Url,Seller,Email,Price,Rating,Quantity,Category,Details}
    console.log(addDetails);
    fetch("http://localhost:5000/addtoys", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(addDetails)

    })
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
      
    })
    
   }

  
  return (

    <div>
     <h1 className="text-center text-4xl font-bold mb-10">ADD TOYS DATA</h1>
  <form >
    <div className=" grid lg:grid-cols-3 gap-4 content-center mb-10 ">
    <div>
      <h1 className="mb-5 font-bold text-2xl">TOY NAME</h1>
    <input onChange={(e) => setName(e.target.value)} type="toyname" placeholder="Type here"  className="input input-bordered w-full max-w-xl" />
    </div>
    <div>
      <h1 className="mb-5 font-bold text-2xl">PICTURE URL</h1>
    <input onChange={(e) => setUrl(e.target.value)} type="url" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
    </div>
    <div>
      <h1 className="mb-5 font-bold text-2xl">SELLER NAME</h1>
    <input onChange={(e) => setSeller(e.target.value)} type="seller" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
    </div>
    <div>
      <h1 className="mb-5 font-bold text-2xl">SELLER EMAIL</h1>
    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
    </div>
    <div>
      <h1 className="mb-5 font-bold text-2xl">PRICE</h1>
    <input onChange={(e) => setPrice(e.target.value)} type="price" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
    </div>
    <div>
      <h1 className="mb-5 font-bold text-2xl">RATING</h1>
    <input onChange={(e) => setRating(e.target.value)} type="rating" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
    </div>
    <div>
      <h1 className="mb-5 font-bold text-2xl">AVAILABLE QUANTITY</h1>
    <input onChange={(e) => setQuantity(e.target.value)} type="quantity" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
    </div>
    <div>
      <h1 className="mb-5 font-bold text-2xl">CATAGORY</h1>
    <input onChange={(e) => setCategory(e.target.value)} type="details" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
    </div>
    <div>
      <h1 className="mb-5 font-bold text-2xl">DETAILS DESTRICPTION</h1>
    <input onChange={(e) => setDetails(e.target.value)} type="details" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
    </div>
    
    
  </div>
  </form>
    <div className="text-center pb-10">
    <button className="btn btn-wide content-center" onClick={handleSubmit} >SUBMIT</button>
    </div>
    </div>
  );
};

export default AddToys;