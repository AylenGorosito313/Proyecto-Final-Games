const formateDate = (lastmonth) => {
    let date = Date.now();
    let format = new Date(date);
    let currentDate = format.toISOString().substring(0, 10);

    if (lastmonth) {
        let splitToDate = currentDate.split("-")[1] - 1;
        let currentSplit = currentDate.split("-");
        let dateFinally = `${currentSplit[0]}-${splitToDate}-${currentSplit[2] -1}`;
        return `${dateFinally},${currentDate}`;
    } else {
        let splitToDate = currentDate.split("-")[0] - 1;
        let currentSplit = currentDate.substring(5);
        return `${splitToDate}-${currentSplit},${currentDate}`;
    }
};

module.exports = formateDate;
