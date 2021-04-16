import {Component} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-kolkov-editor-component',
    template: `<angular-editor
        [formControl]="editorControl"
        (ngModelChange)="onEditorChange()"
        [config]="config"
    ></angular-editor>`
})
export class KolkovEditorComponent {

    public editorControl: FormControl = new FormControl('text');

    config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '5rem',
        minHeight: '3rem',
        placeholder: 'Enter text here...',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Arial'
    };

    public onEditorChange(): void {
        console.log(this.editorControl.value);
    }

}
