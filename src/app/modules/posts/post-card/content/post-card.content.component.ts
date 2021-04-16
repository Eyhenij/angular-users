import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-post-card-content',
    templateUrl: './post-card.content.component.html',
    styleUrls: ['./post-card.content.component.scss']
})
export class PostCardContentComponent implements OnChanges {
    @Input()
    public content: string;
    @Input()
    public editPostMode: boolean;

    public newContentControl: FormControl;

    @Output()
    public onChangeContent: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.newContentControl = new FormControl(
            this.content,
            [Validators.minLength(3), Validators.required]
        );
    }

    public onChange(): void {
        this.onChangeContent.emit(this.newContentControl.value);
    }
}
