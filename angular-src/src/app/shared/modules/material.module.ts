import { NgModule } from '@angular/core';

import {
    MatProgressBarModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule
} from '@angular/material';

@NgModule({
    imports: [
        MatProgressBarModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatStepperModule
    ],
    exports: [
        MatProgressBarModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatStepperModule
    ]
})
export class MaterialModule { }