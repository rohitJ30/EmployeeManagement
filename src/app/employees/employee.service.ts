import { Injectable, inject, signal } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { tap } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private _dbService = inject(NgxIndexedDBService);
  public sharedData = signal<Employee[]>([]);

  saveData(input: object) {
    return this._dbService.add('Employee', input)
      .pipe(
        tap(() =>
          this.sharedData.set([...this.sharedData(), input])
        ));
  }

  updateData(input: object, id: any) {
    return this._dbService.update('Employee', input)
      .pipe(
        tap(() =>
          this.sharedData.mutate((result) => (result[id] = input))
        ));
  }

  getEmployee() {
    return this._dbService.getAll<Employee[]>('Employee')
      .pipe(
        tap((result: any) =>
          this.sharedData.set(result)
        ));
  }

  getEmployeeById(id: any) {
    return this._dbService.getByID('Employee', +id);
  }

  removeData(id: number) {
    return this._dbService.delete<Employee[]>('Employee', id)
      .pipe(tap((result: any) =>
        this.sharedData.set(result)
      ));
  }
}
