import * as singleSPA from "single-spa";

try {
    singleSPA.registerApplication("app1", () => import("./app1/main"), location => location.pathname.startsWith("/app1"));
    singleSPA.registerApplication("app2", () => import("./app2/main"), location => location.pathname.startsWith("/app2"));
}
catch(err) {
    console.error(err);
}

singleSPA.start();
