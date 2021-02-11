import {NgModule} from '@angular/core';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        MatButtonToggleModule,
        MatSliderModule,
        MatButtonModule,
        MatOptionModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonToggleModule,
        MatSliderModule,
        MatButtonModule,
        MatOptionModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {
}
