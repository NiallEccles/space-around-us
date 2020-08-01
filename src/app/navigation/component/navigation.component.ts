import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navItems = [
    {text: 'explore', icon: 'eva-globe-2-outline', link:''},
    {text: 'effects', icon: 'eva-flash-outline', link:'/effects'},
    {text: 'saved', icon: 'eva-bookmark-outline', link:'/saved'},
    {text: 'a11y', icon: 'eva-eye-outline', link:'a11y'},
    {text: 'share', icon: 'eva-share-outline', link:'share'},
  ];

  private activeItem: number;

  constructor() {
    this.activeItem = 0;
   }

  ngOnInit(): void {
  }

}
