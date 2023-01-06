// ╔══╗
// ║██║
// ║()║ ♫ ♪ ♫ ♪ // Queen-Don't Stop Me Now ♫ ♪
// ╚══╝
// ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
// Min- - - - - - - - -●Max

// ░░░░░██╗░█████╗░██╗░░░██╗░█████╗░░██████╗░█████╗░██████╗░██╗██████╗░████████╗
// ░░░░░██║██╔══██╗██║░░░██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██║██╔══██╗╚══██╔══╝
// ░░░░░██║███████║╚██╗░██╔╝███████║╚█████╗░██║░░╚═╝██████╔╝██║██████╔╝░░░██║░░░
// ██╗░░██║██╔══██║░╚████╔╝░██╔══██║░╚═══██╗██║░░██╗██╔══██╗██║██╔═══╝░░░░██║░░░
// ╚█████╔╝██║░░██║░░╚██╔╝░░██║░░██║██████╔╝╚█████╔╝██║░░██║██║██║░░░░░░░░██║░░░
// ░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░

// ███████╗░█████╗░██████╗░███████╗██╗░░░██╗███████╗██████╗░
// ██╔════╝██╔══██╗██╔══██╗██╔════╝██║░░░██║██╔════╝██╔══██╗
// █████╗░░██║░░██║██████╔╝█████╗░░╚██╗░██╔╝█████╗░░██████╔╝
// ██╔══╝░░██║░░██║██╔══██╗██╔══╝░░░╚████╔╝░██╔══╝░░██╔══██╗
// ██║░░░░░╚█████╔╝██║░░██║███████╗░░╚██╔╝░░███████╗██║░░██║
// ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝

const server = require("./src/app.js");
const sequelize = require("./src/db");

require("./src/models/games");
require("./src/models/genres");
require("./src/models/users");
require('./src/models/platform')
require("./src/models/carrito");
require("./src/models/providers")
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

// ___________§§§$$§§$§§_
//  _W_______$$$$$§§§$$§§$§_
//  _______($$$$$$$§§§$$§§$§§_(§§)_
//  _E_____($$$$$$$$$$$$§§$$__$§§$)~
//  ________(§§§$$$$§$$$$§§$$§§$§§$§§~
//  ________((_($$§§$§§$§§§§§§§§§$$§§$
//  _L______))_(§$$$$$$§§$$§§$§§$§§§§§~
//  _________((_)_((§$$§$$§§$$§§$§§$§§§§((....
//  _O_________))_)_§$$))_$$$§§§$$§§$§§$§§§§§
//  ___________(__(_))_§$§§§§§$$§§$$§§$§§$§§§
//  _V_____________(__$_$$§§§§§§$$§§$$§§$§§$§§
//  _______________)_$_$§$§§§§§§$§§$$§§$§§§§__§
//  _E________________)$__§§§§§§$§$$_§$$§§___§$§
//  _______B_________(§___$§§§§§$§§$_§$$___§§§§§§
//  _________________($§__$§$§§§$$$§§§_$__$§§§§§$§§
//  _Y_____A__________§§§_§$$$$$§§§§§§§$§§_§$$§$$§§§§
//  ___________________(§__§§§§§§§§§§$§§$$§§_§§$_§§§§§
//  _O_____C___________(§_$$§§$§§§§§§§§$$§§$§_$§§§§§§
//  ____________________§_$§§$§§§§§§§§$$§§_§§$§§§§§§
//  _U_____K____________§__$$§§§§$§§§§§§$_§§$§§$§§§
//  _____________________§_$$§§§§$§§§§§__$§§$§§$§§
//  _______E_____________§_$$_§§§§§§$§§$$§§$§§§§
//  _____________________§§§§_§§§§§$§§$$§§$§§§§
//  _______N_____________§§§$$::::§§$$$§§$$§§$_§
//  ___________________§§§§:§§§§§§__§§$§§$§_§§
//  _______D_________§$$:§§§§§$$$§___§$§§$§§§§
//  ______________§§:§§$§$$§§$$__$§§$§§§§§§
//  ____________$$§:§§§$§$$$$$§§$$§§$§§$§_§§§
//  __________$$§:§§$$$$$$§§$§§§§§§§$$___$§§
//  _______$$$§::§$$$$$$§§$§§§§§§§§§______§§
//  _____$$$§::§$$$$FL$§§§§§§§$§§$_________§
//  ___$$$§::§§$$$$§§§§$$$§§§§
//  _$$§::§§§$$§§$§§§§§§§§§
//  $§§§$§§§§§$$§§§§§§§
//  §§§§§§§$$§§$§§§§
//  _§§§§§§§§$§§_§§$
//  _§§§§§§§§§$§§$_§§§
//  __§§§§$§§§$§$§§$_§§
//  ___§§§§$§§§$§$§§$_§§
//  _____$§§§§§§§§§§§$§_§§
//  ______§§§$§§§§§§$§§$§_§
//  _______$§§§§§§§$$§$$§§_§§
//  ________§§§§$$§§$$§§$$§§_§
//  _________§$§$$$§§§§§§$$§§$§§
//  __________$$$$§§$_§§$§§$§§§§§§
//  ___________§$§§$§§_§§§§§§§§§$$§§$§
//  ____________§$§§$§§_§§§§§§§§_$$§§$
//  _____________§$§§$§§_$§§§§§__§§$§
//  _________________§$§§$______§§§§
//  __________________§§§§§_§§__§§§§$
//  __________________§§§$§§__$§§§§§§§
//  ___________________§$§§$§____§$§§§§
//  _____________________§§§$§§___§§$§§
