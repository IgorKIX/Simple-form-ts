import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export const CurrentUserContext =
  React.createContext<TCurrentUserContext | null>(null);

export const CurrentUserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);

  const setCurrentUser = (user: IUser) => {
    setUser(user);
  };

  return (
    <CurrentUserContext.Provider value={{ user, loginUser: setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
