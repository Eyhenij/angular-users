import {Component, EventEmitter, Output} from '@angular/core';
import {ContentChange} from 'ngx-quill';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-quill-editor-component',
    template: `
        <quill-editor
            [styles]="{height: '150px'}"
            (onContentChanged)="onEditorChanged($event)"
            [formControl]="editorControl"
            [modules]="editorModules"
        ></quill-editor>
        <quill-view-html [content]="editorString"></quill-view-html>`
})
export class QuillEditorComponent {
    @Output()
    public onEditorContentChange: EventEmitter<string> = new EventEmitter<string>();

    public editorControl: FormControl = new FormControl('initial text');
    public editorString: string;
    public editorModules = {
        toolbar: [
            ['blockquote', 'code-block'],
            [{header: 1}, {header: 2}],               // custom button values
            [{list: 'ordered'}, {list: 'bullet'}],
            [{script: 'sub'}, {script: 'super'}],      // superscript/subscript
            [{indent: '-1'}, {indent: '+1'}],          // outdent/indent
            [{direction: 'rtl'}],                         // text direction
            [{size: ['small', false, 'large', 'huge']}],  // custom dropdown
            [{header: [1, 2, 3, 4, 5, 6, false]}],
            [{color: []}, {background: []}],          // dropdown with defaults from theme
            [{font: []}],
            [{align: []}]
        ]
    };

    public onEditorChanged(event: ContentChange): void {
        this.editorString = event.editor.root.innerHTML;
        this.onEditorContentChange.emit(event.editor.root.innerHTML);
        // console.log(event.editor.root.innerHTML);
        console.log(this.editorControl.value);
    }

}
