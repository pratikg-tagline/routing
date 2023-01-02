import { Injectable } from '@angular/core';
// import { Data } from '@angular/router';

interface Data{
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  list: Data[] = [
    {
      id: 1,
      name: 'user 1',
    },
    {
      id: 2,
      name: 'user 2',
    },
    {
      id: 3,
      name: 'user 3',
    },
  ];
}
