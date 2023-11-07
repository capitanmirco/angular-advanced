import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlayerModule } from '../player/player.module';

@NgModule({
  declarations: [PlaylistComponent],
  imports: [CommonModule, PlaylistRoutingModule, PlayerModule],
  exports: [PlaylistComponent],
})
export class PlaylistModule {}
