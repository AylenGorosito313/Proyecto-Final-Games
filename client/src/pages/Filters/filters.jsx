import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import{  getGames,} from "../../middleware"
    import Card from "../../components/Cards/Cards";
    import Seach from "../../components/Search/Search"
    import Loading from "../../components/Loading/Loading";
    import { clearState } from "../../reducers/prueba/pruebaSlider";
    import "./filters.module.css";
const Filter = () => {
    const [actualFilters, setActualFilters] = useState({
        order: '', // este hace referencia a alfabeticamente
    
    });
    
    const handleAlphabeticallySelect = (e) => {
        let order = 'None';
        if (e.target.value === 'Z-A') order = 'DES_ALPHABETICALLY';
        else if (e.target.value === 'A-Z') order = 'ASC_ALPHABETICALLY';
        setActualFilters(state => { return { ...state, order } });
    }
    
    const dispatch = useDispatch();
    const { games, isLoader, res } = useSelector((state) => state.prueba);
    const backResponse = () => {
        if (res.cart) {
       return   toast.error("You should register or login for add cart ", {
            position: "bottom-right",
            duration: 2000,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      };
      
  useEffect(() => {
    dispatch(getGames()); 
    return () => {
      dispatch(clearState())
    } 
  }, []);
  if (isLoader && !games.length) {
    return (
      <div className="loadin-home">
        <Loading />
      </div>
    );
  }
  return (
    <div  >
      <div className="desplazado"  >
      <Seach  />
      </div>
    
          <div  >
          <p>ORDEN ALFABETICO</p>
<select  onChange={handleAlphabeticallySelect} defaultValue={'None'}  id="orderAlphabetically" className="input" >    
                        <option value='None'>None</option>
                        {Array.from(['A-Z', 'Z-A']).map((order) => {
                            return <option key={order} value={order}>{order}</option>
                        })
                        }
                      
                    </select>
          </div>
          <div>
            <p>PLATAFORMA</p>
          <select className="input" >
          {Array.from([   "PC",
    "PlayStation 5",
    "PlayStation 4",
    "Xbox One",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "PS Vita",
    "PSP",
    "Wii U",
    "Wii",
    "GameCube",
    "Nintendo 64",
    "Game Boy Advance",
    "Game Boy Color",
    "Game Boy",
    "SNES",
    "NES",
    "Classic Macintosh",
    "Apple II",
    "Commodore / Amiga",
    "Atari 7800",
    "Atari 5200",
    "Atari 2600",
    "Atari Flashback",
    "Atari 8-bit",
    "Atari ST",
    "Atari Lynx",
    "Atari XEGS",
    "Genesis",
    "SEGA Saturn",
    "SEGA CD",
    "SEGA 32X",
    "SEGA Master System",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",]).map((order) => {
                            return <option key={order} value={order}>{order}</option>
                        })
                        }
                        </select>
          </div>
          <div>
            <div>
              <p>GÉNERO</p>
                <select className="input" >
           
                        {Array.from([ "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Massively Multiplayer",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card"]).map((order) => {
                            return <option key={order} value={order}>{order}</option>
                        })
                        }
            </select>
            </div>
        
          </div>
          <div>
          <p>PRECIO</p>
<select  onChange={handleAlphabeticallySelect} defaultValue={'None'}  id="orderAlphabetically" className="input" >

 
                        {Array.from(["Por debajo de 30 US", "Por debajo de 60 US","Por debajo de 90 US","Por debajo de 110 US","Gratis"]).map((order) => {
                            return <option key={order} value={order}>{order}</option>
                        })
                        }
                      
                    </select>
          </div>
          
{res.cart && backResponse()}

<Toaster />
<Seach  />
<h1> All Games </h1>
<div className="div-home-card" >
            {games.length &&
              games.map((ele) => {
                return (
                  <Card
                    key={ele.id}
                    img={ele.background_image}
                    name={ele.name}
                    id={ele.id}
                    rating={ele.rating}
                    platforms={ele.parent_platforms}
                    released={ele.released}
                    genres={ele.genres}
                  />
                );
              })}
          </div>
    </div>
  )
}

export default Filter