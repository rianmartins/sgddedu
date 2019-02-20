import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './listarSgddedu.routing';
import { SharedModule } from '../../../shared/shared.module';
import { ListarSgddeduComponent } from './listarSgddedu.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        ListarSgddeduComponent
    ]
})
export class ListarSgddeduModule { }
