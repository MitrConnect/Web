import { rtdb } from "./config.js";
import { ref, set, get, update, child } from "firebase/database";

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
  return set(ref(rtdb, `/${path}`), data)
  .catch((error) => {
    console.error("[RTDB] Error writting data entries: ", error);
  });
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
  return get(child(ref(rtdb), `/${path}`))
  .catch((error) => {
    console.error("[RTDB] Error reading data entries: ", error);
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
  return update(ref(db), data)
  .catch((error) => {
    console.error("[RTDB] Error update data entries: ", error);
  });
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

  return update(ref(db), updates)
  .catch((error) => {
    console.error("[RTDB] Error removing data entries: ", error);
  });
}