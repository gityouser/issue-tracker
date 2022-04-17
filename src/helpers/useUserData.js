import { useQuery } from "react-query";
export function useUserData(userId) {
  const usersData = useQuery(["users", userId], (args) => {
    console.log({ args });
    return fetch(`/api/users/${userId}`).then((res) => res.json());
  });

  return usersData;
}
