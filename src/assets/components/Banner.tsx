
import banner from "../banner-stack.png";




const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto mt-3 rounded-3xl px-0 py-2 flex items-center justify-between'>
        
      

             <div>
           <h2 className='text-4xl font-bold'>Build Your Idea</h2>
         
             <div className="space-y-6">

            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to bg-purple-700 bg-clip-text text-transparent">Development Stack </h3>
           
            

            <p className="text-gray-500 leading-7 max-w-xl">Explore frontend,backend,database,and tooling options,
                compare them side by side and put together the stack that first Your <br /> 
                next project</p> 

                

                <div className='flex gap-4 mt-10'>
                    <button className=" w-60 px-8 py-3 rounded-lg bg-gradient-to-r
                     from-orange-500 to-purple-500  text-white text-base font-medium">Explore Technologies</button>

                     <button className="w-60 px-8 py-3 rounded-lg border border-gray-300 text-black font-medium">learn More</button>
               
                  </div>
                </div>
                </div>

                <div className="w-1/2 flex justify-end" >

                    <img src={banner} alt="banner" />
                </div>
               
        </div>
    );
};

export default Banner;