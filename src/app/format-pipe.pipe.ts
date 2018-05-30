import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPipe'
})
export class FormatPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
