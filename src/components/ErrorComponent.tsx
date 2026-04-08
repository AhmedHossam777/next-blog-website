import { useRouter } from "next/router";
import React from "react";

function ErrorComponent() {
  const router = useRouter();
  const back = () => {
    router.replace("/");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400">Page not found</p>
        <button
          onClick={back}
          className="cursor-pointer mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default ErrorComponent;
