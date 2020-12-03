import { Component, Input, OnInit } from '@angular/core'

export interface IImagesGallery {
  images: string[];
  length: any
  slice: any
}

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss']
})

export class ImagesGalleryComponent implements OnInit {
  ngOnInit (): void {
    this.currentLargeImg = 0
  }

  @Input() images: IImagesGallery

  currentLargeImg: number

  imageSlider (navigation: string): void {
    switch (navigation) {
      case 'prev':
        if (this.currentLargeImg === 0) return
        this.currentLargeImg -= 1
        break
      case 'next':
        if (this.currentLargeImg === this.images.length - 1) return
        this.currentLargeImg += 1
        break
      default:
        break
    }
  }
}
