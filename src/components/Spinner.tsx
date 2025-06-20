const Spinner = () => {
  return (
    <div
      className="w-24 h-24 border-4 border-t-transparent border-gray-800 rounded-full animate-spin"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
