import { useState } from "react";
import { assets } from "../assets/assets";
import Button from "../components/Button";

function AddProduct() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [sizes, setSizes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("working");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt="image1"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt="image2"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt="image3"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt="image4"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter product name"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter product description"
          required
        />
      </div>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub category</p>
          <select className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="50"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product size</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((sizes) =>
                sizes.includes("S")
                  ? sizes.filter((size) => size !== "S")
                  : [...sizes, "S"],
              )
            }
          >
            <p
              className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer px-3 py-1`}
            >
              S
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((sizes) =>
                sizes.includes("M")
                  ? sizes.filter((size) => size !== "M")
                  : [...sizes, "M"],
              )
            }
          >
            <p
              className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer px-3 py-1`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((sizes) =>
                sizes.includes("L")
                  ? sizes.filter((size) => size !== "L")
                  : [...sizes, "L"],
              )
            }
          >
            <p
              className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer px-3 py-1`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((sizes) =>
                sizes.includes("XL")
                  ? sizes.filter((size) => size !== "XL")
                  : [...sizes, "XL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer px-3 py-1`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((sizes) =>
                sizes.includes("XXL")
                  ? sizes.filter((size) => size !== "XXL")
                  : [...sizes, "XXL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer px-3 py-1`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-2">
        <input type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to best seller ?
        </label>
      </div>
      <Button>ADD</Button>
    </form>
  );
}

export default AddProduct;
