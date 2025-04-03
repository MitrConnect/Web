import { clouddb } from "./config.js";
import { doc, collection, setDoc, addDoc, updateDoc, getDoc, getDocs, getDocFromCache, deleteDoc, query, where } from "firebase/firestore"; 

/**
 * Splits a Firestore path into an array.
 * @param {string} path - The Firestore path (e.g., "users/user123").
 * @returns {string[]} - The split path array.
 * @example
 * // Example usage
 * const path = "users/user123";
 * const result = ref(path);
 * console.log(result); 
 * // Output: ["users", "user123"]
 */
export function ref(path) {
    return path.split("/").filter(Boolean); // Remove empty segments
}

/**
 * Writes data to Firestore. Uses `addDoc` for collections and `setDoc` for documents.
 * @param {string} path - The Firestore path.
 * @param {Object} data - The data to write.
 * @returns {Promise<DocumentReference | void>}
 * @example
 * // Example usage for a collection
 * const path = "users"; // Collection path
 * const data = { name: "John Doe", age: 30 };
 * const docRef = await WRITE(path, data);
 * console.log(docRef.id); // Logs the auto-generated document ID for the user.
 * 
 * // Example usage for a document
 * const path = "users/user123"; // Document path
 * const data = { name: "Jane Doe", age: 25 };
 * await WRITE(path, data); // Writes the data to the document at the specified path
 * 
 */
export async function WRITE(path, data) {
    try {
        const pathArray = ref(path);
        
        if (pathArray.length % 2 === 1) {
            // Collection → Use addDoc (Auto-generate document ID)
            const docRef = await addDoc(collection(clouddb, ...pathArray), data);
            console.log("Document written with ID:", docRef.id);
            return docRef;
        } else {
            // Document → Use setDoc
            await setDoc(doc(clouddb, ...pathArray), data);
            console.log("Document successfully written at path:", path);
        }
    } catch (error) {
        console.error("[CloudDB] ", error.code, error.message, error);
    }
}

/**
 * Updates an existing document in Firestore.
 * @param {string} path - The Firestore document path.
 * @param {Object} data - The fields to update.
 * @returns {Promise<void>}
 * @example
 * // Example usage
 * const path = "users/user123"; // Document path
 * const data = { age: 31 }; // Fields to update
 * await UPDATE(path, data); // Updates the 'age' field of the document at the specified path
 * console.log("Document updated successfully.");
 */
export async function UPDATE(path, data) {
    return await updateDoc(doc(clouddb, ...ref(path)), data);
}

/**
 * Reads a document from Firestore.
 * @param {string} path - The Firestore document path.
 * @param {boolean} fromCache - Whether to read from cache first.
 * @returns {Promise<Object | undefined>} - The document data or undefined.
 * @example
 * // Example usage
 * const path = "users/user123"; // Document path
 * const data = await READ(path, true); // Reads from cache first, then from server if not found in cache
 * if (data) {
 *     console.log("Document data:", data); // Logs the document data if it exists
 * } else {
 *     console.log("No document found at the specified path.");
 * }
 */
export async function READ(path, fromCache = true) {
    const documentRef = doc(clouddb, ...ref(path));

    if (fromCache) {
        try {
            const cachedDoc = await getDocFromCache(documentRef);
            if (cachedDoc.exists()) {
                return cachedDoc.data();
            }
        } catch (e) {
            console.warn("[CloudDB] Cache miss, falling back to server");
        }
    }

    const docSnap = await getDoc(documentRef);
    return docSnap.exists() ? docSnap.data() : undefined;
}

/**
 * Reads multiple documents from a Firestore collection, with optional filtering.
 * @param {string} path - The Firestore collection path.
 * @param {Array} filter - Optional filter in the format [field, operator, value].
 * @returns {Promise<Array<Object>>} - An array of documents.
 * @example
 * // Example usage without filter
 * const path = "users"; // Collection path
 * const users = await READ_MULTI_DOC(path);
 * console.log(users); // Logs all documents in the 'users' collection
 * 
 * // Example usage with filter
 * const path = "users"; // Collection path
 * const filter = ["age", ">", 25]; // Filter to get users older than 25
 * const filteredUsers = await READ_MULTI_DOC(path, filter);
 * console.log(filteredUsers); // Logs filtered documents where 'age' > 25
 */
export async function READ_MULTI_DOC(path, filter = undefined) {
    let q = collection(clouddb, ...ref(path));

    if (filter) {
        q = query(q, where(filter[0], filter[1], filter[2]));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

/**
 * Deletes a document from Firestore.
 * @param {string} path - The Firestore document path.
 * @returns {Promise<void>}
 * @example
 * // Example usage
 * const path = "users/user123"; // Document path
 * await REMOVE(path); // Deletes the document at the specified path
 * console.log("Document deleted successfully.");
 */
export async function REMOVE(path) {
    return await deleteDoc(doc(clouddb, ...ref(path)));
}
