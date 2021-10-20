import axios from "axios";

class EventService {
    private readonly URL = "http://localhost:4000/events";

    getAll = async (): Promise<IEvent[]> => {
        const response = await axios.get(this.URL);

        return response.data;
    };

    create = async (newUser: PreEvent): Promise<IEvent> => {
        const response = await axios.post(this.URL, newUser);
        return response.data;
    };
}

export default new EventService();
