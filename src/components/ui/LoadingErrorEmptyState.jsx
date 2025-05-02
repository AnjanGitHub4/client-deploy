import React from "react";

const LoadingErrorEmptyState = ({
  isLoading,
  error,
  data,
  loadingMessage = "Loading...",
  errorMessage = "Error fetching data",
  emptyMessage = "No data available",
  children
}) => {
  if (isLoading) {
    return (
      <div className="destination-spots flex flex-col items-center justify-center text-blue-600 text-lg font-medium mt-4 p-2 ">
       {loadingMessage}
      </div>
    );
  }
  if (error) {
    return (
      <div className="destination-spots flex flex-col items-center justify-center text-pink-200 text-lg font-medium italic mt-4 p-2 border-t-2 border-t-pink-700 bg-red-500 rounded-md">
      {errorMessage}
      </div>
    );
  }
  if (!data) {
    return (
      <div className="destination-spots flex flex-col items-center justify-center text-pink-200 text-lg font-medium italic mt-4 p-2 border-t-2 border-t-pink-700 bg-red-500 rounded-md">
        {emptyMessage}
      </div>
    );
  }
  return <> {children} </>; 
};

export default LoadingErrorEmptyState;
