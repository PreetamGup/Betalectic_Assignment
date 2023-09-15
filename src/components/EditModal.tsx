/* eslint-disable react/display-name */
import { useState } from 'react';
import { ReuseButton } from "@locoworks/reusejs-react-button";
import { ImCancelCircle } from "react-icons/im";



const EditModal = (props:any) => {

  const [Efav, setEFav] = useState<string>(props.fav.fav);
  const [EwhyFav, setEwhyFav] = useState<string>(props.fav.whyFav);
  
  const handleEdit = () => {
  
    props.fav.fav= Efav;
    props.fav.whyFav=EwhyFav;

    props.setShowEditModal2(false)

    
  }

  return (
    <div
      className="relative bg-white text-black px-5 py-5 rounded-lg border-2 border-black flex flex-col gap-y-5 w-[400px] font-semibold text-sm"
    >
      <div
        className="text-gray-500 bg-transparent absolute top-2 right-2 p-0 cursor-pointer"
        onClick={() => {
         props.setShowEditModal2(false)
        }}
      >
        <ImCancelCircle />
      </div>
      <h2 className="text-3xl font-bold text-center">Edit</h2>
      <div>
        <label htmlFor="npmName" className="mr-2">Package Name</label><br />
        <input
          type="text"
          id="npmName"
          value={Efav}
          className="border-2 border-black text-gray-500 pl-2"
          onChange={(e) => setEFav(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="whyFav1">Reason</label><br />
        <textarea
          name="whyFav1"
          id="whyFav1"
          cols={30}
          rows={4}
          value={EwhyFav}
          className="border-2 border-black text-gray-500 pl-2"
          onChange={(e) => setEwhyFav(e.target.value)}
        ></textarea>
      </div>

      <div className="flex gap-4">
        <ReuseButton
          className="rounded bg-red-400  text-white px-3 py-1 w-fit hover:bg-sky-500 font-bold"
          onClick={() => {
            props.setShowEditModal2(false)
          }}
        >
          Close
        </ReuseButton>

        <ReuseButton
          className="rounded bg-emerald-500  text-white px-3 py-1 w-fit hover:bg-sky-500 font-bold"
          onClick={() => {
            handleEdit();
          }}
        >
          Confirm
        </ReuseButton>
      </div>
    </div>
  );
};

export default EditModal;
