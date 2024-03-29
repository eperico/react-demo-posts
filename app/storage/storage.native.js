import { AsyncStorage } from 'react-native'

const storage = {

  /**
	 * Get a one or more value for a key or array of keys from AsyncStorage
	 * @param {String|Array} key A key or array of keys
	 * @return {Promise}
	 */
	get(key) {
		if(!Array.isArray(key)) {
			return AsyncStorage.getItem(key).then(value => {
				return JSON.parse(value);
			});
		} else {
			return AsyncStorage.multiGet(key).then(values => {
				return values.map(value => {
					return JSON.parse(value[1]);
				});
			});
		}
	},

	/**
	 * Save a key value pair or a series of key value pairs to AsyncStorage.
	 * @param  {String|Array} key The key or an array of key/value pairs
	 * @param  {Any} value The value to save
	 * @return {Promise}
	 */
	save(key, value) {
		if(!Array.isArray(key)) {
			return AsyncStorage.setItem(key, JSON.stringify(value));
		} else {
			var pairs = key.map(function(pair) {
				return [pair[0], JSON.stringify(pair[1])];
			});
			return AsyncStorage.multiSet(pairs);
		}
	},

	/**
	 * Delete the value for a given key in AsyncStorage.
	 * @param  {String} key The key
	 * @return {Promise}
	 */
	delete(key) {
		return AsyncStorage.removeItem(key);
	},

	/**
	 * Get all keys in AsyncStorage.
	 * @return {Promise} A promise which when it resolves gets passed the saved keys in AsyncStorage.
	 */
	keys() {
		return AsyncStorage.getAllKeys();
	}

};

export default storage;
