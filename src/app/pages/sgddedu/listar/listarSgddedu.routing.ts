import { Routes, RouterModule } from '@angular/router';
import { ListarSgddeduComponent } from './listarSgddedu.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ListarSgddeduComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
