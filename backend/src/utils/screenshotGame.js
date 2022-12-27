const apiCliente = require("./apiClient");

const screenshotGame = async (id) => {
    const { results } = await apiCliente(`games/${id}/screenshots`);
    return results
};

module.exports = screenshotGame;
