import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-libtest',
  template: `
    <p>
      Ya funciona!
    </p>
  `,
  styles: []
})
export class LibtestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
