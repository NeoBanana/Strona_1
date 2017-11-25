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
    MatInputModule
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
        MatInputModule
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
        MatInputModule
    ]
})
export class MaterialModule { }