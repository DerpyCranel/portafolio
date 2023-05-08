import cahm from "../assets/img/cahm.png";
import ella from "../assets/img/ella.png";
import crm from "../assets/img/crm.png";

const Proyects = () => {
  return (
    <>
    
      <div className="mt-44  mb-44 ml-10 mr-10 ">
      <h1 className="text-4xl mt-10" id="proyects">/PROYECTS</h1>
        

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
         
          
            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={cahm} alt="cahm" />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    CAHM page
                  </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Official page of the collection company CAHM
                </p>

                <p className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">ReactJS</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">tailwindcss</span>
                </p>

                
                <a
                  href="http://cahm.com.mx/" target="blank"
                  className=" mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  get page
                </a> 
                
              </div>
            </div>



            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={ella} alt="cahm" />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ella Bella CRM
                  </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                
                Administrative page of products and clients of the company Ella Bella
                </p>

                <p className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">Bootstrap</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">PHP</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">JavaScript</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">Mysql</span>
                </p>

                
                <a
                  href="https://adminellabella.com" target="blank"
                  className=" mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  get page
                </a> 
                
              </div>
            </div>


            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={crm} alt="cahm" />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    CAHM CRM
                  </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                
                Administration of clients at a national level for the financial collection of the company CAHM
                </p>

                <p className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">

                
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">Bootstrap</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">Laravel</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">JavaScript</span>
                <span className=" bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">Mysql</span>
                </p>

                
                <a
                  href="https://crm.cahm.com.mx" target="blank"
                  className=" mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  get page
                </a> 
                
              </div>
            </div>






          
        </div>
      </div>
    </>
  );
};

export default Proyects;
