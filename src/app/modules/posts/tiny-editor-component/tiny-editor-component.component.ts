import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-tiny-editor-component',
    templateUrl: './tiny-editor-component.component.html',
    styleUrls: ['./tiny-editor-component.component.scss']
})
export class TinyEditorComponent implements OnInit {
    @Output()
    public onEditorContentChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public onEditorChange(event): void {
        this.onEditorContentChange.emit(event);
    }

}
