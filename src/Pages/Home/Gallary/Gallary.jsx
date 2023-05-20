

const Gallary = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://i.ibb.co/HNnYXWW/cristiano-ronaldo-roar-version-1671954942-f72bfd57-progressive.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://i.ibb.co/Jc3Bf6H/71b1-g8-K8l-L-SY879.jpg" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://i.ibb.co/7zQdGSN/s-l500.jpg" />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://i.ibb.co/MRGHSVm/image-c96c4822-91fb-4dc7-865e-8b6f04a6a8f7-1024x1024.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://i.ibb.co/fngZ8WS/CB-Hov-KVIAAu-Wi-I-format-png-name-small.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://i.ibb.co/PmYf8tY/51e885da6d395a4e417fcec9d9a1cb0b041e9578.jpg" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Gallary;