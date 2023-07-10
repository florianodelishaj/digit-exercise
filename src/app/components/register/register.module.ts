import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: RegisterComponent }]),
        ReactiveFormsModule
    ],
    exports: [
        RegisterComponent
    ],
    providers: [],
  })
  export class RegisterModule { }