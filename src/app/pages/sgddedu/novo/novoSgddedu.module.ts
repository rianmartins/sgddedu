import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './novoSgddedu.routing';
import { SharedModule } from '../../../shared/shared.module';
import { NovoSgddeduComponent } from './novoSgddedu.component';
import { SelectModule } from 'ng2-select';
import { TextInputHighlightModule } from 'angular-text-input-highlight';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        SelectModule,
        TextInputHighlightModule
    ],
    declarations: [
        NovoSgddeduComponent
    ]
})
export class NovoSgddeduModule { }
