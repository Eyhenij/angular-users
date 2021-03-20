import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsPageComponent} from './posts-page/posts-page.component';
import {PostCardTitleComponent} from './post-card/title/post-card.title.component';
import {NewPostFormComponent} from './new-post-form/new-post-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {PostsRoutingModule} from './posts-routing.module';
import {PostCardButtonBlockComponent} from './post-card/button-block/post-card.button-block.component';
import {PostCardContentComponent} from './post-card/content/post-card.content.component';
import {PostCardComponent} from './post-card/post-card.component';
import {EffectsModule} from '@ngrx/effects';
import {PostsEffects} from '../../store/posts/posts.effects';

@NgModule({
    declarations: [
        PostsPageComponent,
        PostCardTitleComponent,
        NewPostFormComponent,
        PostCardComponent,
        PostCardButtonBlockComponent,
        PostCardContentComponent
    ],
    imports: [
        EffectsModule.forFeature([PostsEffects]),
        ReactiveFormsModule,
        MaterialModule,
        PostsRoutingModule,
        CommonModule
    ]
})
export class PostsModule {}
