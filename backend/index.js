// ╔══╗
// ║██║
// ║()║ ♫ ♪ ♫ ♪ // Queen-Don't Stop Me Now ♫ ♪
// ╚══╝
// ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
// Min- - - - - - - - -●Max

const server = require("./src/app.js");
const sequelize = require("./src/db");

require("./src/models/games");
require("./src/models/genres");

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log("Conect to database");
    server.listen(3001, () => {
      console.log("server lisener in port 3001");
    });
  } catch (error) {
    console.log("error", error);
  }
}

main();
