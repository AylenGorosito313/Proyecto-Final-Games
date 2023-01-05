

export const platformImage = (el) => {

   if(el === "PC"){
    return <i className="fa-brands fa-windows fa-lg"></i>
   }
   if(el === "PlayStation"){
    return <i className="fa-brands fa-playstation fa-lg"></i>
   }
   if(el === "Xbox"){
    return <i className="fa-brands fa-xbox fa-lg"></i>
   }
   
  }

  export const priceFactor = (el) => {
      if(el >= 3.5) return ((el * 0.5) + 5).toFixed(2)
      else return ((el * 0.5) + 0.2).toFixed(2)
  }

  export const cleanURL = (url) => {
    const newURL = url.replace(/.+\/\/|www.|\..+/g, '')
    return newURL
  }