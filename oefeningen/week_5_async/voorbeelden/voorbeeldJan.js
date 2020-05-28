/** Created by Jan de Rijke
 * test voorbeeld:
 > node filteredLs . js
 **/

let fs = require('fs').promises;

function filteredLs(dir, suffix) {
    fs.readdir(dir)
        .then(files => {
                for (let file of files) {
                    if (file.endsWith("." + suffix)) {
                        console.log(file);
                    }
                }
            }
        );
}

//filteredLs(process.argv[2],process.argv[3])

function kettingFilteredLs(dir, suffix) {
    fs.readdir(dir)
        .then(files =>
            files.filter(file =>
                file.endsWith("." + suffix))
                .forEach(file => {
                    console.log(file)
                }));
}

//kettingFilteredLs(process.argv[2],process.argv[3]);

function toonHeaders(dir, suffix) {
    fs.readdir(dir)
        .then(files => {
                for (let file of files) {
                    if (file.endsWith("." + suffix)) {
                        fs.readFile(file, "utf8").then(data => console.log(data.slice(0, 30)))
                    }
                }
            }
        );
}

//toonHeaders(process.argv[2],process.argv[3]);




async function toonHeadersAsync(dir, suffix) {
    for (let file of await fs.readdir(dir)) {
        if (file.endsWith("." + suffix)) {
            let data = await fs.readFile(file, "utf8");
            console.log(data.slice(0, 30))
        }
    }
}

//toonHeadersAsync(process.argv[2],process.argv[3]);

async function getHeadersAsync(dir, suffix) {
    const result = []
    for (let file of await fs.readdir(dir)) {
        if (file.endsWith("." + suffix)) {
            let data = await fs.readFile(file, "utf8");
            result.push(data.slice(0, 30));
        }
    }
    return result;
}

//getHeadersAsync(process.argv[2],process.argv[3]).then(console.table)

function toonHeadersPall(dir, suffix) {
    // je kan dit ook schrijven zonder array functies, zie getHeadersPall
    fs.readdir(process.argv[2])
        .then(files => Promise.all(files
            .filter(file => file.endsWith("." + process.argv[3]))
            .map(file => fs.readFile(file, "utf8"))))
        .then(contents => contents
            .forEach(data => console.log(data.slice(0, 30))))
        .catch(err => console.error(err));
}
//toonHeadersPall(process.argv[2],process.argv[3]);

function getHeadersPall() {
    // je kan dit ook schrijven met array functies, zie toonHeadersPall
    const result = [];
    return fs.readdir(process.argv[2])
        .then(files => {
                for (let file of files) {
                    if (file.endsWith("." + process.argv[3])) {
                        result.push(fs.readFile(file, "utf8"));
                    }
                }
                return Promise.all(result);
            }
        ).then(results => results.map(data => data.slice(0, 30)));
}

getHeadersPall().then(console.table);