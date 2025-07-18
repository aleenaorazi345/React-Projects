import { useState, useEffect, useRef } from "react"; // ✅ also import useEffect, useRef
import { ToastContainer, toast } from 'react-toastify';
import React from "react";
import IngredientList from "./Components/IngredientList";
import ClaudeRecipe from "./Components/ClaudeRecipe";
import { getRecipeFromMistral } from './ai'

export default function Main() {
  const ing = ["Chicken", "Oregano", "Onion"];
  const [message, setMessage] = React.useState([]);
  const [recipeShown, isrecipeShown] = React.useState();
const [isLoading, setIsLoading] = useState(false);

  const recipeRef = useRef(null); // ✅ Step 1: create ref

  function handleSubmit(e) {
    e.preventDefault();
    toast("I was clicked! ");
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setMessage(preving => [...preving, newIngredient]);
  }

 async function showRecipe() {
  setIsLoading(true); // 🌀 Start loading
  try {
    const recipeMarkdown = await getRecipeFromMistral(message);
    isrecipeShown(recipeMarkdown);
  } catch (err) {
    console.error("Error fetching recipe:", err);
  } finally {
    setIsLoading(false); // ✅ Stop loading regardless of success/fail
  }
}

  // ✅ Step 2: useEffect to scroll when recipe is shown
  useEffect(() => {
    if (recipeShown && recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipeShown]);

  return (
    <main>
      <form onSubmit={handleSubmit} className="formm">
        <input
          type="text"
          placeholder="ingredient"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>

      {message.length > 0 && (
        <IngredientList
          message={message}
          showRecipe={showRecipe}
          isrecipeShown={recipeShown}
        />
      )}

      {(isLoading || recipeShown) && (
  <div ref={recipeRef}>
    <ClaudeRecipe recipeShown={recipeShown} isLoading={isLoading} />
  </div>
)}

    </main>
  );
}
