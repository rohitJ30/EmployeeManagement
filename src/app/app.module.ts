import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { EmployeesModule } from './employees/employees.module';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'EmployeeDB',
  version: 1,
  objectStoresMeta: [{
    store: 'Employee',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'empName', keypath: 'empName', options: { unique: true } },
      { name: 'empRole', keypath: 'empRole', options: { unique: false } },
      { name: 'startDate', keypath: 'startDate', options: { unique: false } },
      { name: 'endDate', keypath: 'endDate', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
