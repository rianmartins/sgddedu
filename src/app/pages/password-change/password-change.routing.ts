import { Routes, RouterModule } from '@angular/router';
import { PasswordChangeComponent } from './password-change.component';

const childRoutes: Routes = [
    {
        path: '',
        component: PasswordChangeComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
