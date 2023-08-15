import { useState } from "react";
import data from "../components/data.json";

export default function useUserlist() {
  const [userList, setUserList] = useState(data);

  const searchUser = (keyword) => {
    let filterArray = [];
    if (keyword.length) {
      filterArray = userList.filter((item) => item.name === keyword);
    } else {
      filterArray = [...data];
    }

    if (!filterArray.length) {
      setUserList([]);
    } else {
      setUserList(filterArray);
    }
  };

  return { userList, searchUser };
}
