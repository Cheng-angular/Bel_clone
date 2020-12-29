import { Component, OnInit } from '@angular/core';
import { GalleryData } from '../gallery-data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage,NgxGalleryLayout, NgxGalleryAction, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

interface gImages { 
  small: string;
  medium: string;
  big: string;
  description: string;
}

@Component({
  selector: 'app-landing-gallary',
  templateUrl: './landing-gallary.component.html',
  styleUrls: ['./landing-gallary.component.css']
})
export class LandingGallaryComponent implements OnInit {
  links = [
    { title: 'all', fragment: 'all' },
    { title: 'domes', fragment: 'domes' },
    { title: 'pods', fragment: 'pods' },
    { title: 'minilofts', fragment: 'minilofts' },
    { title: 'chalets', fragment: 'chalets' }
  ]
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galImages: gImages[] = [];
  galleryData: any;
  thumbnailength: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.galleryData = GalleryData;
  }

  getGalleryData(id) {
    this.galleryData = [];
    if (id == 'all') {
      this.galleryData = GalleryData;
    }
    GalleryData.map(async (element) => {
      if (element.value == id) {
        this.galleryData.push(
          element); 
     }
    })
  }

  showImageInGallery(content, id) {
    console.log(id)
    this.modalService.open(content, { size: 'xl', backdrop: true, animation: true, windowClass: 'custom-modal', centered: true });
    GalleryData.map(async (element)=> {
      this.galImages.push({
        small: element.url,
        medium: element.url,
        big: element.url,
        description: element.name
      })

    })
    this.galleryOptions = [
      {
        startIndex: id,
        width: '1150px',
        height: '800px',
        layout: NgxGalleryLayout.ThumbnailsBottom,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageArrows: true,
        thumbnailsSwipe: true,
        imageSwipe: true,
        imageInfinityMove: true,
        imagePercent: 100,
        imageDescription: true,
        lazyLoading: true,
        thumbnails: true,
        preview: false,
        thumbnailsPercent: 15,

      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true
      }
    ];

    this.galleryImages = this.galImages
  }
}
