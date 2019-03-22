import { Routes, RouterModule } from '@angular/router';
import { NovoSgddeduComponent } from './novoSgddedu.component';

const childRoutes: Routes = [
    {
        path: '',
        component: NovoSgddeduComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
