import React from 'react'

function WorkoutComplete({activateComponent}) {

   
        const redirectUser = () => {
            window.close();
  
        };
    
    
    return (
        <div className="welcomeContainer">
          <h3 className="display-1">Well Done!!</h3>
          <button
            onClick={() => activateComponent("setupcomponent")}
            type="button"
            className="btn btn-primary btn-lg"
            style={{ marginTop: "70px" }}
          >
            {" "}
            <b>Again</b>
            
          </button>
         
          <button
            onClick={redirectUser}
            type="button"
            className="btn btn-primary btn-lg"
            style={{ marginTop: "70px" }}
          >
            {" "}
            <b>Exit App</b>

          </button>
   
        </div>
      );
}

export default WorkoutComplete



