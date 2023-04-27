import React from "react";
import { ArrowUp, ZipIcon } from "../Icon";
let CountryList =[
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
const ShoppingCartSummerySection = () => {
  return (
    <section className="mb-4 flex flex-col justify-around items-start gap-2 bg-[#F0F3FF] py-4 px-3 rounded-lg">
      <div className="flex flex-col w-full">
        <h4 className="font-bold text-lg">Summary</h4>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col justify-between">
            <p className="flex items-center justify-between">Estimate Shipping and Tax <span className="flex items-center"><ArrowUp size="8" /></span></p> 
            <p className="text-gray-400">
              Enter your destination to get a shipping <br /> estimate.
            </p>
          </div>
          <div className="flex flex-col">
            <form onSubmit={(e)=>{
              e.preventDefault() ; 
            }} className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
              <label className="font-semibold">Country</label>
              <select defaultValue='' id="cars" name="cars" className="w-full focus:w-full overflow-hidden px-[.5rem] py-[.6rem] border border-black rounded focus:bg-white bg-white">
			  	<option value='' key='empty option' className='w-[5rem] focus:w-[5rem] overflow-hidden'></option>
				{
                  CountryList.map((item , id)=>
                    <option value={item} key={`Country${item}${id}`} className='w-[5rem] focus:w-[5rem] overflow-hidden'>{item}</option>
                  )
                }
              </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">State/Province</label>
                <input type="text" className="px-[.5rem] py-2 w-full px-[.5rem] py-2 border border-black focus:bg-white bg-white rounded"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Zip/Postal Code</label>
                <input type="text" className="px-[.5rem] py-2 w-full px-[.5rem] py-2 border border-black focus:bg-white bg-white rounded"/>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Standard Rate</p>
				<div className="flex items-start gap-3">
					<input checked className="w-5 h-5" type="radio" id="standardrate" name="rater" value="standardrate" />
					<label className="w-full" for="standardrate">Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</label>
				</div>
              </div>
			  <div className="flex flex-col gap-2">
                <p className="font-semibold">Pickup From Store</p>
                <div className="flex items-start gap-3">
					<input className="w-5 h-5" type="radio" id="PickupFromStore" name="rater" value="standardrate" />
					<label className="w-full" for="PickupFromStore">1234 Street Adress, City Address, 1234</label>
				</div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col mt-4 after:block after:content-[''] after:border-b-2 after:border-b-gray-300 after:mt-4 gap-2">
          <div className="flex items-center justify-between">
            <p>Apply Discount Code</p>
            <ArrowUp size="8" />
          </div>
		  <div className="flex flex-col gap-2">
			<label for="discount" className="font-semibold">Enter discount code</label>
			<input placeholder="Enter Discount code" type="text" id="discount" name="discount" className="px-[.5rem] py-2 w-full px-[.5rem] py-2 border border-black focus:bg-white bg-white rounded" />
			<button className="w-full px-4 py-2 border-2 border-secondaryBlue transition-all duration-[.3s] text-secondaryBlue bg-transparent hover:bg-secondaryBlue hover:text-white font-semibold rounded-full mt-3">Check Out with Multiple Addresses</button>
		  </div>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold">$43,544.00</p>
          </div>

          <div className="block">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Shipping</p>
              <p className="font-semibold">$21.00</p>
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              (Standard Rate - Price may vary depending on the item/destination.
              Shop Staff will contact you.)
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Tax</p>
            <p className="font-semibold">$1.91</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">GST (10%)</p>
            <p className="font-semibold">$1.91</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Order Total</p>
            <p className="font-semibold">$13,068.00</p>
          </div>
          <div className="grid grid-cols-[1fr] gap-4">
            <button className="text-white text-center border-2 flex justify-center border-[#0156FF] cursor-pointer bg-[#0156FF] py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
              Proceed to Checkout self-center
            </button>
            <button className="bg-[orange] text-black text-center flex justify-center border-2 border-[orange] cursor-pointer py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
              Proceed to Checkout
            </button>
            <button className="text-gray-500  text-center border-2 flex justify-center border-gray-500 cursor-pointer py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
              Checkout with Multiple Addresses
            </button>
          </div>
        </div>
      </div>
      {/* 
      <div className="flex justify-between items-center w-full">
        <span>Estimate Shipping and Tax</span>
        <ArrowUp />
      </div>
      <span className="text-gray-500 flex justify-between items-center w-full">
        Enter your destination to get a shipping estimate.
      </span>
      <div className="border-b-2 flex justify-between items-center w-full">
        <span>Apply Discount Code</span>
        <ArrowUp />
      </div>
      <div className="flex justify-between items-center w-full">
        <span>Subtotal</span>
        <span>$13,047.00</span>
      </div>
      <div className="flex justify-between items-center w-full">
        <span>Shipping </span>
        <span>$21.00</span>
      </div>
      <span className="text-gray-500">
        (Standard Rate - Price may vary depending on the item/destination. Shop
        Staff will contact you.)
      </span>
      <div className="flex justify-between items-center w-full">
        <span>Tax </span>
        <span>$1.91</span>
      </div>
      <div className="flex justify-between items-center w-full">
        <span>GST (10%) </span>
        <span>$1.91</span>
      </div>
      <div className="flex justify-between items-center w-full">
        <span>Order Total </span>
        <span>$13,068.00</span>
      </div>
      <button className="w-[330px] mt-4 text-white text-center border-2 flex justify-center border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
        Proceed to Checkout self-center
      </button>
      <button className="w-[330px] mt-4 bg-[orange] text-black text-center flex justify-center cursor-pointer px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
        Proceed to Checkout
      </button>
      <button className="w-[330px] mt-4 text-gray-500  text-center border-2 flex justify-center border-[gray-500] cursor-pointer px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
        Checkout with Multiple Addresses
      </button>*/}

      <div className="flex items-center justify-center gap-2 mt-4 w-full">
        <ZipIcon />
        <a href="#" className="max-w-[12rem] text-sm leading-5 flex items-center before:h-7 before:mr-2 before:block before:content-[''] before:border before:rounded-full before:border-secondaryBlue ">
          <span>
            own it now, up to 6 months interest free{" "}
            <span className="underline">learn more</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ShoppingCartSummerySection;
