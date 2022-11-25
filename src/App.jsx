import React from "react";
import { createServer } from "miragejs";
import TagInput from "./components/TagInput/TagInput";

function App() {
  createServer({
    routes() {
      this.namespace = "api";
      this.get("/tags", () => [
        {
          id: "apple",
          label: "Apple",
        },
        {
          id: "gillette",
          label: "Gillette",
        },
        {
          id: "mastercard",
          label: "Mastercard",
        },
        {
          id: "the-walt-disney-company",
          label: "The Walt Disney Company",
        },
        {
          id: "facebook",
          label: "Facebook",
        },
        {
          id: "louis-vuitton",
          label: "Louis Vuitton",
        },
      ]);
    },
  });

  return (
    <div className="container">
      <TagInput />
    </div>
  );
}

export default App;
