import axios from "axios";

class UserService {
  private readonly URL = "http://localhost:4000/users";

  getAll = async (): Promise<IUser[]> => {
    const response = await axios.get(this.URL);

    return response.data;
  };

  create = async (newUser: IPreUser): Promise<IUser> => {
    console.log("New user created");
    const response = await axios.post(this.URL, newUser);
    return response.data;
  };
}

export default new UserService();
