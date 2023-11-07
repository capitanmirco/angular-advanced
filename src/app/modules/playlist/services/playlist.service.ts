import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Playlist } from '../entity/model/playlist';
import { PlaylistDto } from '../entity/dto/playlist.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  constructor(private _http: HttpClient) {}

  public list(): Observable<Playlist[]> {
    return this._http.get<PlaylistDto[]>(`${environment.api.url}/album`).pipe(
      map((playlists) =>
        playlists.map((playlist) => new Playlist(playlist.id, playlist.name))
      ),
      shareReplay(1)
    );
  }
}
