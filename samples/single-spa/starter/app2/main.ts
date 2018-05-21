import "zone.js";

// const helpers = singleSPAAngular({
//     mainModule:
//     angularPlatform:
//     template:
//     domElementGetter:
// });

export function mount(props) {
    console.log("angular.mount");
    return Promise.resolve();
}

export function unmount(props) {
    console.log("angular.unmount");
    return Promise.resolve();
}

export function bootstrap(props) {
    console.log("angular.bootstrap");
    return Promise.resolve();
}
