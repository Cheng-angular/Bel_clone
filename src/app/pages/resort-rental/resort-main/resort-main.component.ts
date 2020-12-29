import { Component, OnInit } from '@angular/core';
import { ResortData } from '../resort-data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAction} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-resort-main',
  templateUrl: './resort-main.component.html',
  styleUrls: ['./resort-main.component.css']
})
export class ResortMainComponent implements OnInit {
  links = [
    { title: 'view all', fragment: 'all' },
    { title: 'sleeps 2', fragment: 's2' },
    { title: 'sleeps 4', fragment: 's4' },
    { title: 'sleeps 6', fragment: 's6' },
    { title: 'sleeps 8 to 10', fragment: 's10' }
  ]

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  onClick: NgxGalleryAction[];
  resortdata: any;
  zoomimageurl: string;
  zoomimagename: string;
  imagezoom: boolean;
  modal: boolean;
  // resortdata = ResortData;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.resortdata = ResortData;
  }

  getResortData(id) {
    this.resortdata = [];
    if (id == 'all') {
      this.resortdata = ResortData;
    }
    ResortData.map(async (element) => {
      if (element.value == id) {
        this.resortdata.push(
          element); 
     }
    })
  }

  zoomImage(content, url, name) { 
    this.zoomimagename = name;
    this.modal = !this.modal;
    this.modalService.open(content, { size: 'md', windowClass: 'custom-modal', centered: true });
    this.galleryOptions = [
      {
        width: '500px',
        height: '400px',
        imageArrows: false,
        imagePercent: 100,
        lazyLoading: true,
        thumbnails: false,
        preview: true,
        previewAnimation: true,
        previewFullscreen: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewAutoPlay: false,
        previewArrows: false,
        previewZoom: true,
        previewZoomMax: 1.2,
        previewZoomMin: 1,
        previewZoomStep: 0.1
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

    this.galleryImages = [
      {
        small: url,
        big: url,
        medium: url
      }
    ];

  }

  fullscreenwidth() {
    this.imagezoom = !this.imagezoom;
    document.documentElement.requestFullscreen();
  }

}
