// File: App.js
import { useState } from "react";
import "./styles.css";

// Welcome component receiving props
function Welcome({ name }) {
  return <h1 className="text-2xl font-bold">Welcome, {name}!</h1>;
}

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => setShowMessage(!showMessage);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <Welcome name="Guest" />
      <button
        onClick={toggleMessage}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {showMessage && (
        <p className="mt-4 text-lg text-gray-700">
          This message is toggled using React state!
        </p>
      )}
    </div>
  );
}
