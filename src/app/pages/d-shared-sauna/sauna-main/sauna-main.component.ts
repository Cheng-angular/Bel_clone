import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { ResortData } from '../../resort-rental/resort-data';

interface gImages { 
  small: string;
  medium: string;
  big: string;
  description: string;
}

@Component({
  selector: 'app-sauna-main',
  templateUrl: './sauna-main.component.html',
  styleUrls: ['./sauna-main.component.css']
})
export class SaunaMainComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galImages: gImages[] = [];
  constructor() { }

  ngOnInit(): void {
    ResortData.map(async (element) => {
      if (element.value === 's2') {
        this.galImages.push({
          small: element.url,
          medium: element.url,
          big: element.url,
          description: element.name
        }); 
      }
    })

    this.galleryOptions = [
      {
        width: '700px',
        height: '520px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide,
        lazyLoading: true,
        imagePercent: 100,
        imageAutoPlay: true,
        imageAutoPlayInterval: 5000,
        thumbnailsPercent: 20,
        thumbnailsArrowsAutoHide: true,
        preview: true,
        previewSwipe: true,
        thumbnailsSwipe: true,
        previewFullscreen: false,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewAutoPlay: true,
        previewAutoPlayInterval: 4000,

      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '400px',
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
