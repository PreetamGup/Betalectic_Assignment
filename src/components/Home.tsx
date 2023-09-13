import React,{useEffect, useState} from 'react'



interface ReactPackage {
    package:{
        name: string;
        description: string;
    }
  }

const Home:React.FC = () => {
  const [input, setInput]= useState<String>();
  const [fav, setFav]= useState<String>();
  const [whyfav, setWhyFav]= useState<String>();
  const [searchResult, setSearchResult] = useState<ReactPackage[]>([])



  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
   

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
       <div className='searchInput'>
            <label htmlFor="search" className="text-xl font-bold">Search For NPM Packages</label>
            <input type="text" id='search' onChange={(e)=> setInput(e.target.value)} className='border-solid border w-full rounded-sm text-sm text-gray-500 p-2'/> 
       </div>

        <div className='result mt-5'>
            <h2 className='text-xl font-bold'>Results</h2>
            <form className="flex flex-col w-auto " onSubmit={handleSubmit}>
                
                    <div className='flex flex-col w-auto h-40 overflow-auto scrollbar-hide'>
                       { searchResult?.map((result)=>(
                        <div className='flex gap-1'>
                            <input type='radio' id={`${result.package.name}`} value={`${result.package.name}`} onChange={(e)=>{setFav(e.target.value); console.log(e.target.value)}}/>
                            <label htmlFor="">{`${result.package.name}`}</label>
                        </div>
                        ))}
                    </div>

                <label htmlFor="whyfav">Why is this your fav?</label>
                <textarea name="whyfac" id="whyfav" cols={30} rows={5} className=' border-solid border-2 p-2' onChange={(e)=>setWhyFav(e.target.value)}></textarea>

                <button className=' bg-sky-600 p-2 w-[100px] mt-4 '>Submit</button>
             
           </form>
        </div>
    </div>
  )}

export default Home