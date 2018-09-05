import { AsyncStorage } from 'react-native';

// storage for read/write data to device storage
// eslint-disable-next-line
const get = async (key, cb) => await AsyncStorage.getItem(key, (err, resp) => cb ? cb(err, resp) : null);
// eslint-disable-next-line
const getAll = async (keys, cb) => await AsyncStorage.multiGet(keys, (err, resp) => cb ? cb(err, resp) : null);
// eslint-disable-next-line
const set = async (key, payload, cb) => await AsyncStorage.setItem(key, JSON.stringify(payload), (err, resp) => cb ? cb(err, resp) : null);
// eslint-disable-next-line
const remove = async (keys, cb) => await AsyncStorage.multiRemove(keys, (err) => cb ? cb(err) : null);

const Storage = {
  get,
  getAll,
  set,
  remove,
};

export default Storage;
