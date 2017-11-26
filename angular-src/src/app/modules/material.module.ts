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
    MatSnackBarModule
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
        MatSnackBarModule
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
        MatSnackBarModule
    ]
})
export class MaterialModule { }