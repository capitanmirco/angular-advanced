import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaylistModule } from '../playlist/playlist.module';
import { HomeComponent } from './components/home/home.component';
import { PlayerModule } from '../player/player.module';
import { ForDirective } from './directives/for.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ForDirective,
    EqualValidatorDirective,
  ],
  imports: [CommonModule, PlaylistModule, NgbModule, PlayerModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ForDirective,
    EqualValidatorDirective,
  ],
})
export class SharedModule {}
