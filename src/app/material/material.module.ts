import {NgModule} from '@angular/core';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
    MatButtonToggleModule,
    MatSliderModule,
    MatButtonModule,
    MatOptionModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule
];

@NgModule({
    providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}],
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {}
