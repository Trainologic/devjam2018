const {promisify}  = require("util");
const child_process = require("child_process");
const path = require("path");
const spawn = promisify(child_process.spawn);

main();

async function main() {
    spawn("npm",
        [
            "start"
        ],
        {
            cwd: path.resolve(__dirname, "./ng1-app"),
            shell: true,
            stdio: "inherit",
        });

    spawn("npm",
        [
            "start"
        ],
        {
            cwd: path.resolve(__dirname, "./ng5-app"),
            shell: true,
            stdio: "inherit",
        });

    spawn("npm",
        [
            "start"
        ],
        {
            cwd: path.resolve(__dirname, "./gateway"),
            shell: true,
            stdio: "inherit",
        });

    // await delay(2500);
    //
    // spawn("npm",
    //     [
    //         "browser"
    //     ],
    //     {
    //         cwd: path.resolve(__dirname, "./gateway"),
    //         shell: true,
    //         stdio: "inherit",
    //     });
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve);
    });
}
