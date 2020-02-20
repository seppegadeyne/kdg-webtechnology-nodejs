function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
        console.log('In new Promise');
    })
}
msgAfterTimeout("", "Foo", 1000).then((msg) =>
    msgAfterTimeout(msg, "Bar", 2000)
).then((msg) => {
    console.log(`done after 3000ms:${msg}`)
})