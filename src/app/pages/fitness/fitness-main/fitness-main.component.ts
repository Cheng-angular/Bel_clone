import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { FitnessData } from '../fitness-data';

interface gImages { 
  small: string;
  medium: string;
  big: string;
  description: string;
}

@Component({
  selector: 'app-fitness-main',
  templateUrl: './fitness-main.component.html',
  styleUrls: ['./fitness-main.component.css']
})
export class FitnessMainComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galImages: gImages[] = [];
  constructor() { }

  ngOnInit(): void {
    FitnessData.map(async (element) => {
      this.galImages.push({
        small: element.url,
        medium: element.url,
        big: element.url,
        description: element.name
      });
    });

    this.galleryOptions = [
      {
        width: '630px',
        height: '395px',
        imageAnimation: NgxGalleryAnimation.Slide,
        lazyLoading: true,
        imagePercent: 100,
        imageAutoPlay: true,
        imageAutoPlayInterval: 5000,
        thumbnails: false,
        preview: false

      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '300px',
        imagePercent: 80
      },
      // max-width 400
      {
        breakpoint: 500,
        preview: false
      }
    ];

    this.galleryImages = this.galImages;
  }

}
