import { AsyncStorage } from 'react-native';

// storage for read/write data to device storage
const get = async (key, cb) => await AsyncStorage.getItem(key, (err, resp) => cb ? cb(err, resp) : null);
const getAll = async (keys, cb) => await AsyncStorage.multiGet(keys, (err, resp) => cb ? cb(err, resp) : null);
const set = async (key, payload, cb) => await AsyncStorage.setItem(key, JSON.stringify(payload), (err, resp) => cb ? cb(err, resp) : null);
const remove = async (keys, cb) => await AsyncStorage.multiRemove(keys, (err) => cb ? cb(err) : null);

const Storage = {
  get: get,
  getAll: getAll,
  set: set,
  remove: remove
}

export default Storage;