import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-fate-editor-component',
    template: `
<!--<fate-ui></fate-ui>-->
<!--<fate-input></fate-input>-->
<fate-material
    [formControl]="editorControl"
    (ngModelChange)="onEditorChange()"
></fate-material>
<!--<fate-bootstrap></fate-bootstrap>-->
`
})
export class FateEditorComponent {
    public editorControl: FormControl = new FormControl('initial text');
    public onEditorChange(): void {
        console.log(this.editorControl.value);
    }
}
