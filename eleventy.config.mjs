import date from "nunjucks-date"

export default function (config) {
    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/img");

    config.setInputDirectory("src");
    config.setDataDirectory("_data");

    date.setDefaultFormat("MMM Do YYYY");
    config.addFilter("date", date);

    config.addGlobalData("now", new Date());
}