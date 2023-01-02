const formateDate = (lastmonth) => {
    let date = Date.now() + 1;
    let format = new Date(date);
    let currentDate = format.toISOString().substring(0, 10);

    if (lastmonth) {
        let splitToDate = currentDate.split("-")[1] - 1;
        let currentSplit = currentDate.split("-");
        if (splitToDate === 0) {
            splitToDate = 12;
            currentSplit[0] = currentSplit[0] - 1;
        }
        let dateFinally = `${currentSplit[0]}-${splitToDate}-${
            currentSplit[2]
        }`;
        console.log(`${dateFinally},${currentDate}`);
        return `${dateFinally},${currentDate}`;
    } else {
        let splitToDate = currentDate.split("-")[0] - 1;
        let currentSplit = currentDate.substring(5);
        console.log(`${splitToDate}-${currentSplit},${currentDate}`);
        return `${splitToDate}-${currentSplit},${currentDate}`;
    }
};

formateDate();
module.exports = formateDate;
