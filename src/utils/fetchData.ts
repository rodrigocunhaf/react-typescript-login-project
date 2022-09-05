import axios from 'axios';

export type Entity = {
  id: string;
  name: string;
  password: string;
};

const fetchData = async () => {
  const response = await axios({
    baseURL:
      'https://form-project-typescript-atomic-default-rtdb.firebaseio.com/users.json',
    method: 'GET',
  });
  const data: Entity[] = response.data;
  return data;
};

export default fetchData;
