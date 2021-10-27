import {createAction, props} from '@ngrx/store';
import {NewsParam} from './model/NewsParam';


export const configNewsForm = createAction(
  '[Form resolver] Config NewsForm',
  props <{config: NewsParam}>()
);
