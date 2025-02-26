import "primeflex/primeflex.css";
import "../App.css";

function Background({children}) {
  return (
        <div
          className="flex align-items-center justify-content-center h-screen absolute z-0"
        >
         {children}
          <div id="stars" className="stars"></div>
          <div id="stars2" className="stars"></div>
          <div id="stars3" className="stars"></div>
          <div id="character" className="character"></div>
       
    </div> 
  );
}

export default Background;
