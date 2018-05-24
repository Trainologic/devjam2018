import { Injectable } from '@angular/core';

export interface WebWorker {
  get();
  start();
  terminate();
}


@Injectable()
export class WebWorkerService {

  createWorker(body: Function, param: Array<any>): WebWorker {
       const params = JSON.stringify(param).slice(1, -1);
       const blob = new Blob([
            `self.addEventListener("message", (e) => {
                if(e.data === "Start Worker") {
                    let returnVal = (${body})(${params});
                    self.postMessage(returnVal);
                }
                if(e.data === "Stop Worker") {
                    self.close();
                }
             });`]);

       const blobURL = window.URL.createObjectURL(blob);
       const worker: Worker = new Worker(blobURL);

       return {
         get : function() {
           return worker;
         },
         start : function () {
           worker.postMessage('Start Worker');
         } ,
         terminate : function () {
           worker.terminate();
         }
       };
    }
}
