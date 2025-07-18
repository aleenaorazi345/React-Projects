import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipeShown, error, isLoading }) {
  return (
    <section>
      <h2>Chef Claude recommends</h2>

      {error ? (
        <div style={{ color: "red" }}>
          <strong>⚠️ Error loading recipe:</strong> {error}
        </div>
      ) : isLoading ? (
        <div className="loading-overlay">
          <div className="loading-popup">🍳 Generating your gourmet recipe...</div>
        </div>
      ) : (
        <ReactMarkdown>{recipeShown}</ReactMarkdown>
      )}
    </section>
  );
}
