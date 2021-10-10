let puppeteer = require("puppeteer");
let firstTab;
let browserOpenPromise = puppeteer.launch({ headless: false });
browserOpenPromise.then(function (browserContextObj) {
    // console.log(("browser is launched!!"));
    let pagesPromise = browserContextObj.pages();
    return pagesPromise;
}).then(function (pagePromise) {
    firstTab = pagePromise[0];
    let openTab = firstTab.goto("https://www.google.com/");
    return openTab;
}).then(function () {
    let waitPromise = firstTab.waitForSelector("input[type='text']", { visible: true });
    return waitPromise;
})
    .then(function () {
        // console.log("browser launched");
        let keyPress = firstTab.type("input[type='text']", "youtube");
        return keyPress;
    }).then(function () {
        let enterTypedThing = firstTab.keyboard.press("Enter");
        return enterTypedThing;
    }).then(function () {
        let waitforselector = firstTab.waitForSelector("h3.LC20lb.DKV0Md", { visible: true });
        return waitforselector;
    }).then(function () {
        let click = firstTab.click("h3.LC20lb.DKV0Md");
        return click;
    }).catch(function (err) {
        console.log(err);
    })