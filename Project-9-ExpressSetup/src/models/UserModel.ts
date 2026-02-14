// Blueprint of what a User looks like
import { User } from "../types";

//Dummy data
const users: User[] = [
  { id: 1, name: "Abc", age: 20 },
  { id: 2, name: "Xyz", age: 30 },
];

export const getAllUsers = (): User[] => {
  return users;
}

export const findUserById = (id: number): User | undefined => {
  return users.find((u) => u.id === id);
}