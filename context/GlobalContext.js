'use client';
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({children}) {
 const [unreadCount, setunreadCount] = useState(0);

 return (
 <GlobalContext.Provider value={{
  unreadCount,
  setunreadCount
  }}>
   {children}
  </GlobalContext.Provider>)
}

export function useGlobalContext(){
 return useContext(GlobalContext);
}

