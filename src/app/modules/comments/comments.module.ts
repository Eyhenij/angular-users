import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentsStoreModule } from '../../store/comments/comments-store.module';


@NgModule({
    declarations: [
        CommentCardComponent,
        CommentContainerComponent
    ],
    imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
        CommentsStoreModule
    ],
    exports: [CommentContainerComponent]
})
export class CommentsModule {}
