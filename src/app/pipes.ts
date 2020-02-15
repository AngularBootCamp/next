import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkmark'
})
export class CheckmarkPipe implements PipeTransform {
  transform(input: boolean) {
    const checkMark = '\u2713';
    const xMark = '\u2718';
    return input ? checkMark : xMark;
  }
}

@Pipe({
  name: 'toCaps'
})
export class ToCapsPipe implements PipeTransform {
  transform(input: string) {
    if (input && input.toUpperCase) {
      return input.toUpperCase();
    }
    return input;
  }
}

@Pipe({
  name: 'containsX'
})
export class ContainsXPipe implements PipeTransform {
  transform(collection: string[], searchTerm: string) {
    if (collection && collection.filter) {
      return collection.filter(v => v.indexOf(searchTerm) > -1);
    }
    return collection;
  }
}

@Pipe({
  name: 'fieldRange'
})
export class FieldRangePipe implements PipeTransform {
  transform(
    input: Array<Record<string, any>>,
    fieldName: string,
    lower: any,
    upper: any
  ) {
    // Why Record<string, any>[]? Because the consumer of this pipe
    // could send us any kind of object. We'll just let JavaScript compare
    // them and end up with normal JavaScript semantics.
    if (input && input.filter) {
      return input.filter(
        v => v[fieldName] >= lower && v[fieldName] <= upper
      );
    }
    return input;
  }
}
