import localforage from 'localforage'

const storage = {

  /**
	 * Get a one or more value for a key or array of keys from localforage
	 * @param {String|Array} key A key or array of keys
	 * @return {Promise}
	 */
	get(key) {
		return localforage.getItem(key).then(value => {
			return JSON.parse(value);
		});
	},

	/**
	 * Save a key value pair or a series of key value pairs to localforage.
	 * @param  {String|Array} key The key or an array of key/value pairs
	 * @param  {Any} value The value to save
	 * @return {Promise}
	 */
	save(key, value) {
		return localforage.setItem(key, JSON.stringify(value));
	},

	/**
	 * Delete the value for a given key in localforage.
	 * @param  {String} key The key
	 * @return {Promise}
	 */
	delete(key) {
		return localforage.removeItem(key);
	},

	/**
	 * Get all keys in localforage.
	 * @return {Promise}
	 */
	keys() {
		return localforage.keys();
	}

};

export default storage;
