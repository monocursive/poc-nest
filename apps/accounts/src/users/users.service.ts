import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersService {
  getUser(name: string): Observable<string> {
    return of(`Hello ${name}`);
  }
}
