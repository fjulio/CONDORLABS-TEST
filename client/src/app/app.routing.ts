import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionComponent} from './components/transaction/transaction.component';
import { ChartsComponent} from './components/charts/charts.component';
import { ComplianceStatusGraphComponent} from './components/compliance-status-graph/compliance-status-graph.component';
import { LineGraphAvgComponent} from './components/line-graph-avg/line-graph-avg.component';



const appRoutes: Routes = [
    { path: 'transaction', component: TransactionComponent },
    { path: 'charts', component: ChartsComponent },
    { path: 'compliance', component: ComplianceStatusGraphComponent },
    { path: 'avgperday', component: LineGraphAvgComponent },

    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);