import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'internet-icon-ribbon',
    templateUrl: `./internet-icon-ribbon.template.html`
})

export class InternetIconRibbonComponent {

    constructor(
        private matIconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {

        matIconRegistry
            .addSvgIcon('linkedin-box',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/linkedin-box.svg'))
            .addSvgIcon('bitbucket',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/bitbucket.svg'))
            .addSvgIcon('file-pdf-box',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/file-pdf-box.svg'))
            .addSvgIcon('twitter-box',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/twitter-box.svg'))
            .addSvgIcon('github-box',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/github-box.svg'))
            .addSvgIcon('microsoft',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/microsoft.svg'))
            .addSvgIcon('codefights',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/codefights.svg'))
            .addSvgIcon('udemy',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/udemy.svg'))
            .addSvgIcon('stackoverflow',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/stackoverflow.svg'))
            .addSvgIcon('hackerrank',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/hackerrank.svg'))
            .addSvgIcon('docker',
            sanitizer.bypassSecurityTrustResourceUrl('/theme/icons/docker.svg'));
    }

    ngOnInit() {

    }
}