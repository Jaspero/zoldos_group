import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'MTH'
})
export class MarkdownToHtmlPipe implements PipeTransform {
  transform(value: string): string {
    return marked(value);
  }
}
