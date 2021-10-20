// User

interface IPreUser {
  email: string;
  firstName: string;
  lastName: string;
}

interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

type TUsersContext = {
  users: IUser[];
  addUser: (user: IPreUser) => Promise<IUser>;
};

type TCurrentUserContext = {
  user: IUser | null;
  loginUser: (user: IUser) => void;
};

// Event

interface IEvent {
  _id: string;
  name: string;
  date: number;
  organizer: string;
}

interface PreEvent {
  name: string;
  date: number;
  userId: string;
}

type TEventContext = {
  events: IEvent[];
  addEvent: (event: PreEvent) => void;
};
