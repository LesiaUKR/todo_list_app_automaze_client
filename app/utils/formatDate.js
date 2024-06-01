const moment = require("moment/moment");

const formatDate = (date) => {
  return moment(date, "DD.MM.YYYY").format("DD-MM-YYYY");
};

export default formatDate;
