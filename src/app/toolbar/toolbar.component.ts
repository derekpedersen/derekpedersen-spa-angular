import { Component, ViewChild, Pipe } from '@angular/core';

import { DomSanitizer } from "@angular/platform-browser";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.template.html'
})

export class ToolbarComponent {
    constructor() {
    }

    ngOnInit() {
    }
}