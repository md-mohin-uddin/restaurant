import React from "react";

function Button({ text }) {
  return (
    <button className="mt-4 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition uppercase">
      {text}
    </button>
  );
}

export default Button;
