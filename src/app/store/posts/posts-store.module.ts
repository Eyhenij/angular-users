import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {POSTS_FEATURE_NODE} from '../app.store';
import {postsReducer} from './posts.reducer';
import {PostsEffects} from './posts.effects';


@NgModule({
  imports: [
      CommonModule,
      StoreModule.forFeature(POSTS_FEATURE_NODE, postsReducer),
      EffectsModule.forFeature([PostsEffects])
  ]
})
export class PostsStoreModule {}
