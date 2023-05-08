import link from "../assets/img/link.png";
import github from  "../assets/img/github.png";
import discord from  "../assets/img/discord.png";
import logo from "../assets/img/icon.png"

const  Footer=()=>{



    return(
        <>

        
<footer id="contact" className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className=" md:w-auto w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a  className="flex items-center mb-4 sm:mb-0">
                <img src={logo} className="h-8 mr-3" alt="derpy Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Derpy</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
  <li className="m-3 flex flex-col items-center">
    <a href="https://www.linkedin.com/in/miguel-martinez-43707b238/" target="blank" className="mr-4 hover:underline md:mr-6">
      LinkedIn
      <span><img src={link} alt="nodejs" className="w-12 h-auto" /></span>
    </a>
  </li>
  <li className="m-3 flex flex-col items-center">
    <a href="https://github.com/DerpyCranel" target="blank" className="mr-4 hover:underline md:mr-6">
      Github
      <span><img src={github} alt="nodejs" className="w-16 h-auto" /></span>
    </a>
  </li>
  <li className="m-3 flex flex-col items-center">
    <a className="mr-4 hover:underline md:mr-6">
      Derpy#3288
    </a>
    <span><img src={discord} alt="nodejs" className="w-12 h-auto" /></span>
  </li>
</ul>

        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a  className="hover:underline">DerpyCranel</a>. All Rights Reserved.</span>
    </div>
</footer>





        
        
        
        </>
    );

}


export default Footer;