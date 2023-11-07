import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../../../playlist/entity/model/playlist';
import { PlaylistService } from '../../../playlist/services/playlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public playlists: Playlist[] = [];
  public pls: Observable<Playlist[]>;

  constructor(private _playlistService: PlaylistService) {
    this.pls = this._playlistService.list();
  }

  public ngOnInit(): void {
    this._playlistService
      .list()
      .subscribe((playlists) => (this.playlists = playlists));
  }
}
