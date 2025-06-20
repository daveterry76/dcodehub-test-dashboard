const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-lg font-bold">DCodeDashboard</h1>
      <div className="rounded-full p-2 border border-white bg-transparent cursor-pointer hover:bg-gray-700 transition-colors">
        DD
      </div>
    </div>
  );
};

export default Navbar;
