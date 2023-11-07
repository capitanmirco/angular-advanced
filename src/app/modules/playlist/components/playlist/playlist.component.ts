import { Component, Input } from '@angular/core';
import { Playlist } from '../../entity/model/playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent {
  @Input() public playlist!: Playlist;
}
