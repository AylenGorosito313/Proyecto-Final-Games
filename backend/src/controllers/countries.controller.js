

const getCountries = async (req, res) => {
      
    try {
       
        res.status(200).send([
            "Argentina",  
            "Brasil",
            "México", 
            "Uruguay",
           "Colombia",
            "Chile",
            "Perú"
        ])
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

module.exports = {getCountries};