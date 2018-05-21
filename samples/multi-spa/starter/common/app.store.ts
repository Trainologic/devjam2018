export interface AppStore {
    contacts: Contact[];
    apps: Apps;
}

export interface Apps {
    ng1: Ng1App;
    ng5: Ng5App;
}

export interface MicroApp {
    onStoreChanged?: Function;
}

export interface Ng1App extends MicroApp {
    window: Window;
}

export interface Ng5App extends MicroApp {
    window: Window;
}

export interface Contact {
    id: number;
    name: string;
}

export function connectToAppStore(): AppStore {
    let appStore: AppStore;

    if(window.opener && window.opener.appStore) {
        appStore = window.opener.appStore;
    }
    else {
        appStore = {
            contacts: [
                {id: 1, name: "Ori"},
                {id: 2, name: "Roni"},
            ],
            apps: {
                ng1: null,
                ng5: null,
            }
        };
    }

    window["appStore"] = appStore;

    console.log("appStore", appStore);

    return appStore;
}
