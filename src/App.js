import React from "react";
import MaterialLayout from "./components/Layout/MaterialLayout";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <div>
      <MaterialLayout>
        <iframe
          width="100%"
          src="http://localhost:3000?ccode=ptel"
          title="Introduction To WiseGPT"
          frameborder="0"
          height={1100}
        ></iframe>
      </MaterialLayout>
    </div>
  );
}

export default App;
