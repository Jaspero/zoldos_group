import {Pipe, PipeTransform} from '@angular/core';

/**
 * Performs any operations necessary to nicely
 * render content from the netlify text widget
 */
@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/\n/gi, '<br>');
  }
}
