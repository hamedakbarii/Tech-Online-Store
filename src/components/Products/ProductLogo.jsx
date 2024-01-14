let ProductLogoArray = [
  "./assets/ModelLogo/Roccat.png",
  "./assets/ModelLogo/Msi.png",
  "./assets/ModelLogo/Razer.png",
  "./assets/ModelLogo/Maltake.png",
  "./assets/ModelLogo/Adata.png",
  "./assets/ModelLogo/Hp.png",
  "./assets/ModelLogo/Gigabyte.png",
];

let ProductLogo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 px-2 md:px-0 xl:py-10 gap-3 container md:max-w-[95%] mx-auto place-items-center my-8">
      {ProductLogoArray.map((itemLogo, index) => (
        <div
          key={index}
          className="p-1 transation-all duration-300 hover:bg-[#F5F7FF] rounded-lg hover:-translate-y-[.5rem] blur-[.7px] hover:blur-[0px] md:blur-0"
        >
          <img src={itemLogo} className="object-center object-cover" />
        </div>
      ))}
    </div>
  );
};
export default ProductLogo;
