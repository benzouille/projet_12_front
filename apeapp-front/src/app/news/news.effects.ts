import {Injectable} from '@angular/core';
import {NewsActions} from './actions-types';
import {tap} from 'rxjs/operators';

@Injectable()
export class NewsEffects {

  // saveForm1$ = createEffect(() =>
  //     this.actions$
  //       .pipe(
  //         ofType(NewsActions.saveNewsForm1),
  //         tap(action => localStorage.setItem('form1',
  //           JSON.stringify(action.user))
  //         )
  //       )
  //   , {dispatch: false}
  // );
  //
  // logout$ = createEffect(() =>
  //     this.actions$
  //       .pipe(
  //         ofType(AuthActions.logout),
  //         tap(action => {
  //           localStorage.removeItem('user');
  //           this.router.navigateByUrl('/login');
  //         })
  //       )
  //   , {dispatch: false}
  // );
  //
  // constructor(private actions$: Actions,
  //             private router: Router) {
  // }

}
