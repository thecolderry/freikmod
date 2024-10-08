const glob = require("glob");
const path = require("path");

function addClientListeners(client) {
    const docs = glob.sync("./src/lis/**/*.js");

    for (let i = 0; i < docs.length; i++) {
        const doc = require(
            path.resolve(docs[i])
        );

        if (typeof doc !== "object") continue;
        if (!doc.name && typeof doc.act !== "function") continue;
        
        client.on(doc.name, (...args) => doc.act(client, ...args));
    }
};

module.exports = { addClientListeners };