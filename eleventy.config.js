import date from "nunjucks-date"
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (config) {
    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/img");

    config.setInputDirectory("src");
    config.setDataDirectory("_data");

    date.setDefaultFormat("MMM Do YYYY");
    config.addFilter("date", date);

    config.addGlobalData("now", new Date());

    config.addPlugin(feedPlugin, {
        type: "atom",
        outputPath: "/feed.xml",
        collection: {
            name: "blog",
            limit: 10,
        },
        metadata: {
            language: "en",
            title: "danwebb.net",
            subtitle: "The personal site of Dan Webb aka @danwrong.",
            base: "https://danwebb.net/",
            author: {
                name: "Dan Webb",
                email: "dan@danwebb.net",
            }
        }
    });
}