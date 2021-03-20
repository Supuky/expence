const formatDate = (date) => {
    const d = new Date(date)
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if(month.length) {
        month = `0${month}`
    }

    if(day.length) {
        day = `0${day}`
    }

    return [year, month, day].join('-');

}

export default formatDate;