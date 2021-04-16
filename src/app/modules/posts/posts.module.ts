import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsPageComponent} from './posts-page/posts-page.component';
import {PostCardTitleComponent} from './post-card/title/post-card.title.component';
import {NewPostFormComponent} from './new-post-form/new-post-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {PostsRoutingModule} from './posts-routing.module';
import {PostCardButtonBlockComponent} from './post-card/button-block/post-card.button-block.component';
import {PostCardContentComponent} from './post-card/content/post-card.content.component';
import {PostCardComponent} from './post-card/post-card.component';
import {CommentsModule} from '../comments/comments.module';
import {PostsStoreModule} from '../../store/posts/posts-store.module';
import {QuillModule} from 'ngx-quill';
import {QuillEditorComponent} from './quill-editor-component/quill-editor-component.component';
import {TinyEditorComponent} from './tiny-editor-component/tiny-editor-component.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FateEditorComponent} from './fate-editor-component/fate-editor-component.component';
import {FateMaterialModule, FateModule} from 'fate-editor';
import {KolkovEditorComponent} from './kolkov-editor-component/kolkov-editor-component.component';
import {AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
    declarations: [
        PostsPageComponent,
        PostCardTitleComponent,
        NewPostFormComponent,
        PostCardComponent,
        PostCardButtonBlockComponent,
        PostCardContentComponent,
        QuillEditorComponent,
        TinyEditorComponent,
        FateEditorComponent,
        KolkovEditorComponent
    ],
    imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
        CommentsModule,
        PostsRoutingModule,
        PostsStoreModule,
        QuillModule,
        EditorModule,
        FateModule,
        FateMaterialModule,
        AngularEditorModule,
        FormsModule
    ]
})
export class PostsModule {
}
