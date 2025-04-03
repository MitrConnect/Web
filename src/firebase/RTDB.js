import { rtdb } from "./config.js";
import { ref, set, get, update, child, onValue } from "firebase/database";


/**
 * Stores or overwrites data at the specified path in Firebase Realtime Database.
 *
 * @param {string} path - The database path where the data should be written.
 * @param {Object.<string, any>} data - The data to be stored, represented as a key-value object.
 * @returns {Promise<void>} - A promise that resolves when the data is successfully written.
 *
 * @example
 * WRITE(`users/${user.uid}/`, {
 *   "Name": user.displayName,
 *   "Email": user.email
 * }).then(() => {
 *   console.log("Data written successfully!");
 * }).catch((error) => {
 *   console.error("Error writing data:", error);
 * });
 */
export function WRITE(path, data) {
  return set(ref(rtdb, `/${path}`), data);
}

/**
 * Fetches data from a specified path in Firebase Realtime Database.
 *
 * @param {string} path - The database path from which data should be retrieved.
 * @returns {Promise<void>} - A promise that resolves when the data is successfully retrieved.
 *
 * @example
 * READ("users/user123")
 *   .then(([exists, data]) => {
 *     if (exists) {
 *       console.log("User data:", data);
 *     } else {
 *       console.warn("No data found.");
 *     }
 *   })
 *   .catch((error) => {
 *     console.error("Error fetching data:", error);
 *   });
 */
export function READ(path) {
  return get(child(ref(rtdb), `/${path}`));
}

/**
 * Listens for real-time updates at a specified path in Firebase Realtime Database.
 *
 * @param {string} path - The database path to listen for changes.
 * @param {function(any): void} callback - A function to handle the updated data when changes occur.
 *
 * @example
 * READ_RT("users/user123", (data) => {
 *   console.log("Updated user data:", data);
 * });
 */
export function READ_RT(path, callback) {
  onValue(ref(rtdb, path), (snapshot) => {
    callback(snapshot.val());
  });
}

/**
 * Updates existing data at multiple paths in Firebase Realtime Database.
 *
 * @param {Object.<string, Object.<string, any>>} data - An object where each key is a database path and the value is an object containing updated fields.
 * @returns {Promise<void>} - A promise that resolves when the update operation is completed successfully.
 *
 * @example
 * UPDATE({
 *   "users/user123": { age: 26 },
 *   "posts/post456": { likes: 100 }
 * }).then(() => {
 *   console.log("Data updated successfully!");
 * }).catch((error) => {
 *   console.error("Error updating data:", error);
 * });
 */
export function UPDATE(data) {
  return update(ref(db), data);
}

/**
 * Deletes multiple data entries from Firebase Realtime Database.
 *
 * @param {Array<string>} pathList - A list of database paths to be deleted.
 * @returns {Promise<void>} - A promise that resolves when the deletion is completed successfully.
 *
 * @example
 * REMOVE(["users/user123", "posts/post456"])
 *   .then(() => {
 *     console.log("Data entries removed successfully.");
 *   })
 *   .catch((error) => {
 *     console.error("Error deleting data:", error);
 *   });
 */
export function REMOVE(pathList) {
  const updates = {};

  for (const path of pathList) {
    updates[path] = null;
  }

  return update(ref(db), updates);
}