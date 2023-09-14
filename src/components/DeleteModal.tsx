/* eslint-disable react/display-name */
import React from "react";
import { ReuseButton } from "@locoworks/reusejs-react-button";
import {ImCancelCircle} from "react-icons/im";


const DModal = (props: any, ref: any) => {

    return (
        <div
            ref={ref}
            className="relative bg-red-50 text-red-700 px-2 py-8 rounded-lg border-2 border-red-700 flex flex-col items-center gap-y-5 w-[400px] font-bold text-lg"
        >
            <div
                className="text-gray-500 bg-transparent absolute top-2 right-2 p-0 cursor-pointer"
                onClick={() => {
                    props.onAction(false);
                }}
            >
                <ImCancelCircle />
            </div>

            <label>Are you sure you want to delete?</label>
            
            <div className="flex gap-4">
                <ReuseButton
                    className="rounded bg-red-400  text-white px-3 py-1 w-fit hover:bg-sky-500 font-bold"
                    onClick={() => {
                        props.onAction(false);
                    }}
                >
                    Cancel
                </ReuseButton>

                <ReuseButton
                    className="rounded bg-emerald-500  text-white px-3 py-1 w-fit hover:bg-sky-500 font-bold"
                    onClick={() => {
                       props.handleDelete(props.name) 
                       props.onAction(false)
                    }}
                >
                    Confirm
                </ReuseButton>
            </div>
        </div>
    );
};
	


export default DModal;
