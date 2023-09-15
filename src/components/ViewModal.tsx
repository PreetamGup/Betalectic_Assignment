
import { ReuseButton } from "@locoworks/reusejs-react-button";
import { ImCancelCircle } from "react-icons/im";

const EditViewModal = (props: any, ref: any) => {

  return (
    <div
      ref={ref}
      className="relative bg-white text-black px-5 py-5 rounded-lg border-2 border-black flex flex-col gap-y-5 w-[400px] font-semibold text-sm"
    >
      <div
        className="text-gray-500 bg-transparent absolute top-2 right-2 p-0 cursor-pointer"
        onClick={() => {
          props.onAction(false);
        }}
      >
        <ImCancelCircle />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center">View</h2>
        <label htmlFor="npmName" className="mr-2">Package Name</label><br />
        <input
          type="text"
          id="npmName"
          defaultValue={`${props.fav.fav}`}
          className="border-2 border-black text-gray-500 pl-2"
          disabled={ true }
        
        />
      </div>
      <div>
        <label htmlFor="whyFav1">Reason</label><br />
        <textarea
          name="whyFav1"
          id="whyFav1"
          cols={30}
          rows={4}
          defaultValue={props.fav.whyFav}
          className="border-2 border-black text-gray-500 pl-2"
          disabled={true}
          
        ></textarea>
      </div>
      <div className="flex gap-4">
        <ReuseButton
          className="rounded bg-red-400 text-white px-3 py-1 w-fit hover:bg-sky-500 font-bold"
          onClick={() => {
            props.onAction(false);
          }}
        >
          Close
        </ReuseButton>
      
      </div>
    </div>
  );
};

export default EditViewModal;
