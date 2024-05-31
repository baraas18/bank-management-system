import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit{
    public ngOnInit() {
        this.title.setTitle('NW About');
        console.log('component intialized');
    }

    public constructor (private title: Title) {}

}
