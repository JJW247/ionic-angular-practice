import {Component, OnInit} from '@angular/core';
import {MenuController, SegmentChangeEventDetail} from '@ionic/angular';
import {PlacesService} from '../places.service';
import {Place} from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  constructor(private placesService: PlacesService, private menuController: MenuController) {}
  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }
  onOpenMenu() {
    this.menuController.toggle();
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {}
}
