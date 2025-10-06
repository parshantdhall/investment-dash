import { Client, Account, TablesDB, Query } from "appwrite";

export const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const tablesDB = new TablesDB(client);

const DBID = import.meta.env.VITE_DATABASE_ID;

/**
 * Retrieves all rows from a given table.
 *
 * This function will keep making requests to the Appwrite API until all rows have been retrieved.
 *
 * @param {string} tableId - The ID of the table to retrieve rows from.
 * @returns {Promise<Array<{Object}>} - A promise that resolves with an array of all rows in the table.
 */
export async function getAllRows(tableId) {
    const pageSize = 100;
    let allRows = [];
    let lastId = null;

    while (true) {
        const queries = [Query.limit(pageSize)];
        if (lastId) queries.push(Query.cursorAfter(lastId));

        const res = await tablesDB.listRows({
            databaseId: DBID,
            tableId,
            queries,
        });

        allRows = allRows.concat(res.rows);
        if (res.rows.length < pageSize) break;
        lastId = res.rows[res.rows.length - 1].$id;
    }

    return allRows;
}



/**
 * Creates a new row in a given table.
 *
 * @param {string} tableId - The ID of the table to create the row in.
 * @param {Object} data - The data to store in the row.
 * @returns {Promise<Object>} - A promise that resolves with the newly created row.
 */
export async function createRow(tableId, data) {
    return tablesDB.createRow({
        databaseId: DBID,
        tableId,
        rowId: ID.unique(),
        data
    });
}