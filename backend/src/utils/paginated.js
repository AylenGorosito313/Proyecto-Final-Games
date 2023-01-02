const apiClient = require("./apiClient");

const paginated = async (path, page = "") => {
    let response = undefined;
    try {
        if (page) {
            response = await apiClient(path, `&page=${page}`);
        } else {
            response = await apiClient(path);
        }
        return response.results;
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = paginated;
