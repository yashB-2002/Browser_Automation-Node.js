let puppeteer = require("puppeteer");
let firstTab;
let browserOpenPromise = puppeteer.launch(
    {
        headless: false,
        defaultViewport: null,
        slowMo: 200,
        args: [
            "--start-maximized"
        ]
    });
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
    }).then(function () {
        let wfs = firstTab.waitForSelector("input[type='text']", { visible: true });
        return wfs;
    }).then(function () {
        let searchPromise = firstTab.type("input[type='text']", "apna college");
        return searchPromise;
    }).then(function () {
        let wfs2 = firstTab.waitForSelector("button[id='search-icon-legacy']", { visible: true });
        return wfs2;
    }).then(function () {
        let clickSearchOption = firstTab.click("button[id='search-icon-legacy']");
        return clickSearchOption;
    }).then(function () {
        let wfs3 = firstTab.waitForSelector('a[title="String Builder | Java Placement Course Lecture 13" ]', { visible: true });
        return wfs3;
    }).then(function () {
        let playVideo = firstTab.click('a[title="String Builder | Java Placement Course Lecture 13" ]');
        return playVideo;
    }).then(function () {
        let wfs4 = firstTab.waitForSelector("button[class='ytp-fullscreen-button ytp-button']", { visible: true });
        return wfs4;
    }).then(function () {
        let fullScreen = firstTab.click("button[class='ytp-fullscreen-button ytp-button']");
        return fullScreen;
    }).catch(function (err) {
        console.log(err);
    })
