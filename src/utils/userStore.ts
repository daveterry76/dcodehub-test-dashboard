import { create } from "zustand";
import type { User } from "../hooks/useUsers";

interface UserStore {
  users: User[];
  searchedUsers: User[];
  selectedUser: User | null;
  setUsers: (users: User[]) => void;
  setSearchedUsers: (users: User[]) => void;
  selectUser: (user: User) => void;
  clearSelectedUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  searchedUsers: [],
  selectedUser: null,
  setUsers: (users) => set({ users, searchedUsers: users }),
  setSearchedUsers: (searchedUsers) => set({ searchedUsers }),
  selectUser: (user) => set({ selectedUser: user }),
  clearSelectedUser: () => set({ selectedUser: null }),
}));
