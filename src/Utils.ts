class Utils {
    static dateToString(dateInMillisecond: number): string {
        const date = new Date(dateInMillisecond);
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
}

export default Utils;
