import React from 'react'
import {favoriteList} from '../App'
import { useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import { HeadlessModal } from "@locoworks/reusejs-react-modal";

import DModal from './DeleteModal';



interface FavoriteProps {
    favList: favoriteList[]; // Define the prop favlist
    setFavList: React.Dispatch<React.SetStateAction<favoriteList[]>>; // Define the prop setFavList
  }


const Favorite:React.FC<FavoriteProps> = ({favList, setFavList}) => {
  const navigate= useNavigate();

  
 const handleDelete=(npmName:String)=>{
      const list= favList.filter(npm=> npm.fav!==npmName);
      setFavList([...list])
  }

  const showDModal = async (name:String) => {
    console.log(name,"favorite")
		const result = await HeadlessModal({
			component: DModal,
			backdropClasses: " bg-transparent absolute w-full h-full absolute top-0",
      handleDelete,
      name, 
		});
		if (result) {
			setTimeout(() => {
				alert("Confirmed");
			}, 500);
		}
	};

  return ( 
    <div>
       <div className='navigation mb-5'>
        <span className=' bg-emerald-500 p-1 mr-2 hover:cursor-pointer hover:bg-cyan-500' onClick={()=>navigate("/")}>Home</span>
        <span className=' bg-emerald-500 p-1 mr-2 hover:cursor-pointer hover:bg-cyan-500' onClick={()=>navigate("/favorite")}>Favorite</span>
      </div>
     
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>Welcome To Favorite NPM Packages</h2>
          {
            favList.length!==0 && <button onClick={()=>navigate("/")} className=' bg-violet-500 pl-4 pr-4 p-2 font-semibold rounded text-white text-sm'>Add Fav</button>
          }
        </div>

        <div className='w-full mt-20  border-solid border-2 '>
            {
                favList.length===0 ? 
                <div className='flex flex-col items-center justify-center mt-20 mb-20 '>
                    <span>You don't have any favs yet. Please Add</span><br />
                    <button onClick={()=>navigate("/")} className=' bg-violet-500 pl-4 pr-4 p-2 font-semibold rounded text-white text-sm'>Add Fav</button>
                </div> 
                : 
                
                <div>
                  <table className='w-full' >
                    <thead>
                      <th className=' w-[50%] text-left pl-2'>Package Name</th>
                      <th className=' w-[50%] text-left pl-2'>Actions</th>
                    </thead>
                    <tbody>
                     {
                      favList?.map((fav)=>(
                        <tr>
                          <td className=' pl-2'>{fav.fav}</td>
                          <td className=' flex gap-10 text-[23px] pl-4'>
                            <AiOutlineEye className='hover:cursor-pointer'/>
                            <AiOutlineEdit className='hover:cursor-pointer'/>
                            <AiOutlineDelete className='hover:cursor-pointer' onClick={(e)=>showDModal(fav.fav)}/>
                          </td>
                        </tr>
                      ))
                     }
                    </tbody>
                  </table>
                </div>
            }
        </div>
    </div>
  )
}

export default Favorite