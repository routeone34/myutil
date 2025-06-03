export const dateUtil = {
    // apline linuxでlocaleがなくtoLocaleStringが使えないので代用
    getDateString: function() {
        const dt = new Date();
        const ret = String(dt.getFullYear())
            + "/" + String(dt.getMonth() + 1).padStart(2, "0")
            + "/" + String(dt.getDate()).padStart(2, "0");
        return ret;
    },
    getDateTimeString: function() {
        const dt = new Date();
        const ret = String(dt.getFullYear())
            + "/" + String(dt.getMonth() + 1).padStart(2, "0")
            + "/" + String(dt.getDate()).padStart(2, "0")
            + " " + String(dt.getHours()).padStart(2, "0")
            + ":" + String(dt.getMinutes()).padStart(2, "0")
            + ":" + String(dt.getSeconds()).padStart(2, "0");
        return ret;
    }
};

export default dateUtil;

