export default function (config) {
    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/js");
    config.setInputDirectory("src");
}