const { default: axios } = require("axios");
require("dotenv").config();

const { URL, API_KEY } = process.env;

/**
 *
 * @param {string} path el path a donde quieres pedir info a la api
 * @param {string|number} [page] opcional, es el paginado
 * @returns {object}
 */
const apiClient = async (path, page = "") => {
    console.log(`${URL}${path}?key=${API_KEY}${page}`);
    try {
        const response = await axios.get(
            `${URL}${path}?key=${API_KEY}${page}`,
            {
                headers: {
                    accept: ["Accept", "application/json, text/plain, */*"],
                    "content-type": ["content-type", "aplication/json"],
                    "user-agent": ["User-Agent", "axios/1.2.1"],
                    "accept-encoding": [
                        "Accept-Encoding",
                        "gzip, compress, deflate, br",
                    ],
                    host: "api.rawg.io",
                },
            }
        );
        return response.data;
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = apiClient;
