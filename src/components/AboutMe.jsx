import foto from "../assets/img/im.png";
import js from "../assets/img/js.png";
import html from "../assets/img/html5.png";
import reactl  from "../assets/img/react.png";
import css from "../assets/img/css.png";
import php from "../assets/img/php.png";
import node from "../assets/img/nodejs.png";
import laravel from "../assets/img/laravel.png";
import mysql from "../assets/img/mysql.png";
import sqls from "../assets/img/sqls.svg"
import mongo from "../assets/img/mongo.png";
import git  from "../assets/img/git.png";


const AboutMe=()=>{



    return(

        <>



<h1 className="text-4xl mt-10 ml-44" id="about">/About me</h1>

<div  className="mt-44  mb-44"> 


<div className="flex flex-col md:flex-row">
  <img className="mx-auto object-contain w-96 h-auto rounded-t-lg md:rounded-none md:rounded-l-lg mr-4" src={foto} alt=""/>
  <a className="mx-auto w-full max-w-xl h-192 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:h-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Miguel Alberto Martínez Padilla</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        I am an enthusiastic developer in solving problems and giving solutions through code, 
        I like to work in a team and learn every day to grow professionally.
      </p>
      
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skills</h5>
        <ul className="grid grid-rows-4 grid-flow-col gap-4  mb-3 font-normal text-gray-700 dark:text-gray-400">
          <li>html5 <span><img src={html} alt="html5" className="w-10" /></span></li>
          <li>css3 <span><img src={css} alt="css" className="w-10" /></span></li>
          <li>JavaScript <span><img src={js} alt="js" className="w-10" /></span> </li>
          <li>PHP <span><img src={php} alt="php" className="w-10" /></span> </li>
          <li>Reactjs <span><img src={reactl} alt="reactjs" className="w-10" /></span></li>
          <li>Nodejs <span><img src={node} alt="nodejs" className="w-10" /></span> </li>
          <li>Laravel <span><img src={laravel} alt="laravel" className="w-10" /></span></li>
          <li>Mysql <span><img src={mysql} alt="mysql" className="w-10" /></span></li>
          <li>SQL SERVER <span><img src={sqls} alt="sql server" className="w-10" /></span></li>
          <li>MongoDB <span><img src={mongo} alt="mongo" className="w-10" /></span></li>
          <li>Git <span><img src={git} alt="git" className="w-10" /></span></li>
        </ul>
    </div>
  </a>
</div>


</div>

        
        </>
    );

};


export default AboutMe;