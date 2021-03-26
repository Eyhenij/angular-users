import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { COMMENTS_FEATURE_NODE } from '../app.store';
import { CommentsService } from '../services/comments.service';
import { commentsReducer } from './comments.reducer';
import { CommentsEffects } from './comments.effects';


@NgModule({
    providers: [CommentsService],
    imports: [
        CommonModule,
        StoreModule.forFeature(COMMENTS_FEATURE_NODE, commentsReducer),
        EffectsModule.forFeature([CommentsEffects])
    ]
})
export class CommentsStoreModule {}
