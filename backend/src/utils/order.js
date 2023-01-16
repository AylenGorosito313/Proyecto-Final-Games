const orderAlphabeth = (alphabeth = "", sorT) => {
    alphabeth === "A-Z"
        ? (sorT = sorT.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
          }))
        : (sorT = sorT.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
          }));

    return sorT;
};

const orderPrices = (price, sorT) => {
    price === "ASC"
        ? (sorT = sorT.sort((a, b) => parseInt(a.price) - parseInt(b.price)))
        : (sorT = sorT.sort((a, b) => parseInt(b.price) - parseInt(a.price)));
    return sorT;
};

const orderRating = (rating, sorT) => {
    rating === "ASC"
        ? (sorT = sorT.sort((a, b) => {
              if (a.rating > b.rating) return 1;
              if (a.rating < b.rating) return -1;
              return 0;
          }))
        : (sorT = sorT.sort((a, b) => {
              if (a.rating < b.rating) return 1;
              if (a.rating > b.rating) return -1;
              return 0;
          }));

    return sorT;
};

module.exports = {
    orderAlphabeth,
    orderPrices,
    orderRating,
};
