/*
Created by Franz Zemen 07/07/2024
License Type: 
*/

import {BuiltInMessages, ValidationError} from 'fastest-validator';

export function isErrors(errors: any): errors is ValidationError[] {
  if(Array.isArray(errors)) {
    for (const error of errors) {
      if(!('type' in error && 'field' in error)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
