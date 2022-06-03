function getNumberDays(start, end) {
    //need 2 dates
    const date1 = new Date(start);
    const date2 = new Date(end);

    // converting to a day from milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // getting the time diff
    const differenceTimes = date2.getTime() - date1.getTime();

    // finding the no. of days between the two dates
    const differenceDays = Math.round(differenceTimes / oneDay);

    return differenceDays;
}

console.log(getNumberDays("2/1/2021", "2/11/2021"));