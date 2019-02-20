import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './password-change.routing';
import { SharedModule } from '../../shared/shared.module';
import { PasswordChangeComponent } from './password-change.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        PasswordChangeComponent
    ]
})
export class PasswordChangeModule { }
