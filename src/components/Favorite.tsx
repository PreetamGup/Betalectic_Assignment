import React from 'react'
import {favoriteList} from '../App'


interface FavoriteProps {
    favList: favoriteList[]; // Define the prop favlist
    setFavList: React.Dispatch<React.SetStateAction<favoriteList[]>>; // Define the prop setFavList
  }
const Favorite:React.FC<FavoriteProps> = ({favList, setFavList}) => {
    console.log("hello")
  return ( 
    <div>
        <h2 className='text-2xl font-semibold'>Welcome To Favorite NPM Packages</h2>
        <div className='w-full mt-20  border-solid border-2 '>
            {
                favList.length===0 ? 
                <div className='flex flex-col items-center justify-center mt-20 mb-20 '>
                    <span>You don't have any favs yet. Please Add</span><br />
                    <button className=' bg-violet-500 pl-4 pr-4 p-2 font-semibold rounded text-white text-sm'>Add Fav</button>
                </div> 
                : 
                
                <div></div>
            }
        </div>
    </div>
  )
}

export default Favorite