import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'derp' })
// export class DerpPipe implements PipeTransform {
//     transform(value: any, args: any[] = null): any {
//         return Object.keys(value)//.map(key => value[key]);
//     }
// }
// export class DerpPipe {
//   transform (value, args) {
//     return Array.from(value);
//   }
// }

// export class DerpPipe implements PipeTransform {
//   transform(obj: any) {
//     let result = [];
//     for (var key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result.push(obj[key]);
//       }
//     }
//     return result;
//   }
// }

// @Pipe({name: 'keys'})
export class DerpPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
