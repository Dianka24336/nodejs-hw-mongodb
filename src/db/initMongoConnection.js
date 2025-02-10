import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';


export const initMongoConnection = async () => {
    try {
        const user = getEnvVar('MONGODB_USER');
        const pwd = getEnvVar('MONGODB_PASSWORD');
        const url = getEnvVar('MONGODB_URL');
        const db = getEnvVar('MONGODB_DB');

        await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
    );
      console.log('Mongo connection successfully established!');
    } catch (e) {
      console.log('Error while setting up mongo connection', e);
      throw e;
    }
  };

//   mongodb+srv://dianka24336:o6ZBpr3jIqsEYKAF@cluster0.npdu3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0