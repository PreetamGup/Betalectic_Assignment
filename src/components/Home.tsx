import React,{useEffect, useState} from 'react'
import {favoriteList} from '../App'
import { useNavigate } from 'react-router-dom';


interface ReactPackage {
    package:{
        name: string;
        description: string;
    }
  }

  interface HomeProps {
    favList: favoriteList[]; // Define the prop favlist
    setFavList: React.Dispatch<React.SetStateAction<favoriteList[]>>; // Define the prop setFavList
  }

const Home:React.FC<HomeProps>= ({ favList, setFavList }) => {
  const [input, setInput]= useState<String>("");
  const [fav, setFav]= useState<String>();
  const [whyFav, setwhyFav]= useState<String>();
  const [searchResult, setSearchResult] = useState<ReactPackage[]>([])
  const [errors, setErrors] = useState({
    fav:'',
    whyFav:''
  });

  const navigate= useNavigate();


  const validateForm = () => {
    let errorMessage={
        fav:fav?'':"Fav is required",
        whyFav: whyFav?'':"Add reason"
    }
    
    console.log(errorMessage)

    setErrors(errorMessage)

    return errorMessage.fav ==='' && errorMessage.whyFav ==='';
  };

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();

   if(validateForm()){
        let newFav:favoriteList={
            fav:fav || "",
            whyFav:whyFav || ""
        }
        
        setFavList((prevFavList) => [...prevFavList, newFav]);

        setFav("");
        setwhyFav("");
        navigate("/favorite")
   }

  }
  
  useEffect(()=>{
     // Set a timer to call the API after 500 milliseconds
     const timer = setTimeout(async() => {
        // Only call the API when the search term is not empty
        if (input !== "") {
          const response = await fetch(`https://api.npms.io/v2/search?q=${input}`);
          const data = await response.json();
          
          setSearchResult(data.results)
          console.log(data.results)
        }
      }, 500);
  
      return () => clearTimeout(timer);
    }, [input]);

 
  return (
    <div className='flex flex-col'>
      <div className='navigation mb-5'>
        <span className=' bg-emerald-500 p-1 mr-2 hover:cursor-pointer hover:bg-cyan-500' onClick={()=>navigate("/")}>Home</span>
        <span className=' bg-emerald-500 p-1 mr-2 hover:cursor-pointer hover:bg-cyan-500' onClick={()=>navigate("/favorite")}>Favorite</span>
      </div>
     
       <div className='searchInput'>
            <label htmlFor="search" className="text-xl font-bold">Search For NPM Packages</label>
            <input type="text" id='search'  onChange={(e)=> setInput(e.target.value)} className='border-solid border w-full rounded-sm text-sm text-gray-500 p-2'/> 
       </div>

        <div className='result mt-5'>
            <h2 className='text-xl font-bold'>Results</h2>
            {
                errors.fav && <span className=' text-red-600'>{errors.fav}</span>
            }
            <form className="flex flex-col w-auto " onSubmit={handleSubmit}>
                
                    <div className='flex flex-col w-auto h-40 overflow-auto scrollbar-hide'>
                       { searchResult?.map((result)=>(
                        <div className='flex gap-1 ' key={result.package.name}>
                            <input type='radio' name="npm package" id={result.package.name} value={result.package.name} onChange={(e)=>{setFav(e.target.value)}} />
                            <label htmlFor="">{result.package.name}</label>
                        </div>
                        ))}
                    </div>

                <label htmlFor="whyFav" className='mt-5'>Why is this your fav?</label>
                    {
                    errors.whyFav && <span className=' text-red-600'>{errors.whyFav}</span>
                    }
                <textarea name="whyfac" id="whyFav" cols={30} rows={5} className=' border-solid border-2 p-2' onChange={(e)=>setwhyFav(e.target.value)} ></textarea>

                <button className=' bg-sky-600 p-1 w-[100px] mt-4 rounded'>Submit</button>
             
           </form>
        </div>
    </div>
  )}

export default Home