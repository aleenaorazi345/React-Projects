
import { useState } from "react";
//import { ToastContainer, toast } from 'react-toastify';
export default function IngredientList(props) {
return (
    <>
    <section>
  <h2>Ingredients on hand:</h2>
   <ul>{props.message.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}</ul>
       {props.message.length > 3 && <div className="getRecipe">
          <div><h3>
            Ready ho?</h3>
            <p>Generate a recipe!</p>
        </div>
        <button className="GetRecipe" onClick={props.showRecipe}>
  {props.isrecipeShown ? "Hide Recipe" : "Get Recipe"}
</button>

        </div>}
           </section>
           </>
)
}