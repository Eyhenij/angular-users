import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import {CommentCardComponent} from './comment-card/comment-card.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        CommentCardComponent,
        CommentContainerComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
    ],
    exports: [CommentContainerComponent]
})
export class CommentsModule {}
