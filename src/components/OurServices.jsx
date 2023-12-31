import { DropUser, PriceTag, SupportHeadset } from "./Icon";

let OurServices = () => {
  return (
    <div className="mt-3 md:m-0 px-3 py-12 grid grid-cols md:grid-cols-3 gap-8 w-full bg-PrimaryBlue">
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-secondaryBlue rounded-full">
          <SupportHeadset />
        </div>

        <h4 className="text-xl font-semibold">Product Support</h4>

        <p className="text-gray-600 font-sm text-center">
          Up to 3 years on-site warranty available for your peace of mind.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-secondaryBlue rounded-full">
          <DropUser />
        </div>

        <h4 className="text-xl font-semibold">Product Support</h4>

        <p className="text-gray-600 font-sm text-center">
          Up to 3 yearrs on-site warranty available for your peace of mind.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-secondaryBlue rounded-full">
          <PriceTag />
        </div>

        <h4 className="text-xl font-semibold">Product Support</h4>

        <p className="text-gray-600 font-sm text-center">
          Up to 3 years on-site warranty available for your peace of mind.
        </p>
      </div>
    </div>
  );
};
export default OurServices;
