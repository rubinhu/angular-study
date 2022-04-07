import { Component, OnInit } from '@angular/core';
import { FilterTextService } from '../../shared/filter-text/filter-text.service';

@Component({
  selector: 'shard-sample',
  template: `
   <nz-tabset>
    <nz-tab nzTitle="Filter text">
    <div>This is a sample to filter data by user input</div>
      <toh-filter-text (changed)="filterChanged($event)"></toh-filter-text>
      <ul>
        <li *ngFor="let item of filteredData">
          {{item.name}}
        </li>
      </ul>
    </nz-tab>
  </nz-tabset>
  `,
  styles: [
    `
    `]
})
export class ShardSampleComponent implements OnInit {
  data = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
  ];

  filteredData = this.data;

  constructor(private filterService: FilterTextService) { }

  filterChanged(searchText: string) {
    this.filteredData = this.filterService.filter(searchText, ['id', 'name'], this.data);
  }

  ngOnInit(): void {
    console.log("ShardSampleComponent","ngOnInit");
  }
}