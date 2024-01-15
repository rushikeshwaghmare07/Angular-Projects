import { Routes } from '@angular/router';

import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

export const routes: Routes = [
    {path: 'Technologies', component: TechnologiesComponent},
    {path: 'Books', component: BooksComponent},
    {path: 'WrongChoice', component: WrongChoiceComponent},
    {path: '', redirectTo: '/Technologies', pathMatch: 'full'},
    {path: '**', component: WrongChoiceComponent},
];
