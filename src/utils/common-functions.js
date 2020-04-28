export const fNum = (value) => {
    const numberFormatter = new Intl.NumberFormat('en-IN');
    return isNaN(value) ? '-' : numberFormatter.format(value);
};