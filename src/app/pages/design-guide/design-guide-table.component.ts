import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-guide-table',
  template: ` 
    <h1>Table</h1>
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
          <td>{{ data.age }}</td>
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
    <br />
    <nz-table #fixedTable [nzData]="listOfData" [nzScroll]="{ x: '800px', y: '120px' }" [nzShowPagination]="false">
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of fixedTable.data">
          <td nzLeft>{{ data.name }}</td>
          <td nzRight>{{ data.age }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td nzRight>
            <a>action</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
    <br /><br />
    <div style="background: linear-gradient(180deg, #183B5E 0%, #0B1B2B 100%); color: #fff">
      <nz-pagination [(nzPageIndex)]="current" [nzTotal]="50" nzShowSizeChanger nzShowQuickJumper></nz-pagination>
    </div>
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideTableComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  current = 1;

  constructor() { 
    console.log("DesignGuideTableComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideTableComponent","ngOnInit");
  }
}

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}