import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
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
        BrowserAnimationsModule,
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
        BrowserAnimationsModule,
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