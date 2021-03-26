import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-post-card-title',
    templateUrl: './post-card.title.component.html',
    styleUrls: ['./post-card.title.component.scss']
})
export class PostCardTitleComponent implements OnChanges {
    @Input()
    public title: string;
    @Input()
    public updatedAt: string;
    @Input()
    public editPostMode: boolean;

    public newTitleControl: FormControl;

    @Output()
    public onChangeTitle: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.newTitleControl = new FormControl(
            this.title,
            [Validators.minLength(3), Validators.required]
        );
    }

    public onChange(): void {
        this.onChangeTitle.emit(this.newTitleControl.value);
    }
}
