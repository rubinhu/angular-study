import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-guide-state',
  template: ` 
    <h1>State</h1>
    <nz-table #basicTable [nzData]="listOfData" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.name }}</td>
          <td class={{data.state}}>{{ data.age }}</td>
          <td>{{ data.address }}</td>
          <td>
            <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
              <i nz-icon nzType="more" nzTheme="outline"></i>
            </a>
            <nz-dropdown-menu #menu="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-item>New</li>
                <li nz-menu-item>Edit</li>
                <li nz-menu-item>Delete</li>
              </ul>
            </nz-dropdown-menu>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideStateComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      state: "state-success",
      age: 10,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      state: "state-warning",
      age: 20,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      state: "state-error",
      age: 30,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor() { 
    console.log("DesignGuideStateComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideStateComponent","ngOnInit");
  }
}

interface Person {
  key: string;
  name: string;
  state: string;
  age: number;
  address: string;
}