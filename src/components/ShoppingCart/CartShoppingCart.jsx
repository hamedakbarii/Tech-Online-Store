import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "../Icon";

const CartShoppingCart = (props) => {
  const [Qty, SetQty] = useState(1);

  const decreaseQty = () => {
    if (Qty > 1) {
      SetQty(Qty - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-start gap-4 px-2">
        <div className="w-20">
          <img
            src={props.src}
            alt="case"
            className="w-full h-full object-cover object-center "
          />
        </div>

        <span className="inline-block w-[300px] text-sm">
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
          1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
        </span>
      </div>

      <div className="flex items-start justify-between px-2 font-semibold">
        <div className="flex flex-col items-center gap-2">
          <span>Price</span>
          <span>$4,349.00</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span>QTY</span>

          <div className="flex items-center gap-6 bg-gray-200 px-2 rounded-lg">
            <span className="p-2 w-[2rem]">{Qty}</span>

            <div className="flex flex-col gap-2">
              <span
                className="p-2 flex items-center justify-center"
                onClick={() => {
                  SetQty(Qty + 1);
                }}
              >
                <ArrowUp size={8} />
              </span>

              <span
                className="p-2 flex items-center justify-center"
                onClick={decreaseQty}
              >
                <ArrowDown size={8} color="black" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span>Sub Total</span>
          <span>$34,547.00</span>
        </div>
      </div>
    </div>
  );
};

export default CartShoppingCart;
