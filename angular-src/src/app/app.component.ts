import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String ="Strona główna";
  accent: String = "primary";
  
      constructor(private router: Router) {
      }
  
      ngOnInit() {
          this.router.events
              .filter((event: any) => event instanceof NavigationEnd)
              .subscribe(() => {
                  var root = this.router.routerState.snapshot.root;
                  while (root) {
                      if (root.children && root.children.length) {
                          root = root.children[0];
                      } else if (root.data && root.data["title"]) {
                          this.title = root.data["title"];
                          this.accent = root.data["accent"] ? root.data["accent"] :"primary" ;
                          return;
                      } else {
                          return;
                      }
                  }
              });
      }
}
