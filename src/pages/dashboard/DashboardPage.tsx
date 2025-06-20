import { useState, useEffect } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useUserStore } from "../../utils/userStore";
import { BiErrorCircle } from "react-icons/bi";

import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import UserDetailsModal from "./modals/UserDetailsModal";

const headers: string[] = ["Name", "Email", "Phone", "Company"];

const DashboardPage = () => {
  const { data, isLoading, error } = useUsers();
  const { users, setUsers, selectUser, selectedUser, clearSelectedUser } =
    useUserStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchedUsers, setSearchedUsers] = useState<typeof users>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const filterOptions = users?.map((user) => user.company.name) || [];

  const handleFilter = (company: string) => {
    setSelectedFilter(company);

    const filtered = users?.filter((user) => {
      const matchesCompany = company ? user.company.name === company : true;
      const matchesSearch = user.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCompany && matchesSearch;
    });

    setSearchedUsers(filtered);
  };

  const handleSearch = (e: any) => {
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm);

    const filtered = users?.filter((user) => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCompany = selectedFilter
        ? user.company.name === selectedFilter
        : true;
      return matchesSearch && matchesCompany;
    });

    setSearchedUsers(filtered);
  };

  useEffect(() => {
    if (data) {
      setUsers(data);
      setSearchedUsers(data);
    }
  }, [data]);

  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <Navbar />

      <div className="flex-1 px-6 pt-6 pb-24 bg-gray-100 min-h-screen overflow-y-auto">
        <h1 className="text-2xl font-semibold">Users Overview</h1>

        <div className="flex flex-col gap-2 my-4">
          <div className="block sm:flex items-center gap-x-3 w-full xl:w-1/2">
            <div className="w-full sm:w-2/3">
              <SearchBar
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                onClearSearch={() => {
                  setSearchQuery("");
                  const filtered = users?.filter((user) =>
                    selectedFilter ? user.company.name === selectedFilter : true
                  );
                  setSearchedUsers(filtered);
                }}
              />
            </div>
            <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
              <Dropdown
                placeholder="Filter by company"
                options={filterOptions}
                onSelectOption={handleFilter}
              />
            </div>
          </div>

          <div className="flex-1 my-4 overflow-x-auto">
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Spinner />
              </div>
            ) : error ? (
              <div className="flex items-center gap-2">
                <BiErrorCircle />
                <p>Error fetching users.</p>
              </div>
            ) : (
              <Table
                headers={headers}
                data={searchedUsers?.map((user) => [
                  user.name,
                  user.email,
                  user.phone,
                  user.company.name,
                ])}
                onRowClick={(index) => selectUser(users[index])}
              />
            )}
          </div>
        </div>
      </div>

      {selectedUser && (
        <UserDetailsModal
          isUserDetailsOpen={!!selectedUser}
          onClose={() => clearSelectedUser()}
        />
      )}
    </div>
  );
};

export default DashboardPage;
