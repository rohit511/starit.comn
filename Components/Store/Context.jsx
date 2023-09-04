import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DataReducer } from "./Reducer";
const Data = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [loding, setLoading] = useState(false);
  const [state, dispatch] = useReducer(DataReducer, {
    products: [],
    cart: [],
  });

  useEffect(() => {
    (async () => {
      const headers = {
        projectId: "f104bi07c490",
      };
      try {
        setLoading(true);
        const res = await fetch(
          "https://academics.newtonschool.co/api/v1/ott/show",
          { headers }
        );
        const data = await res.json();
        state.products = data.data.length > 0 ? data.data : [];
        dispatch(state);
        setLoading(false);
      } catch (err) {
        return;
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Data.Provider value={{ state, dispatch }}>{children}</Data.Provider>;
};

export default Context;

export const DataState = () => {
  return useContext(Data);
};
