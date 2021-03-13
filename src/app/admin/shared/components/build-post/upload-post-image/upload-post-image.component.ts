import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-upload-post-image',
  templateUrl: './upload-post-image.component.html',
  styleUrls: ['./upload-post-image.component.scss']
})
export class UploadPostImageComponent implements OnInit {

  @Input() postType = 'article';
  isImageUploaded = false;
  imageSrc = '';
  @Output() postImageLinkUrl = new EventEmitter<string>();

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
  }

  onFileChanged(event: any): void {
    const file = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('image', file);
    this.articleService.uploadArticleImage(uploadData)
      .subscribe(
        res => {
          alert('Uplaod Image Successfully.');
          this.isImageUploaded = true;
          this.imageSrc = res.imageURL;
          this.postImageLinkUrl.emit(this.imageSrc);
        },
        error => alert(error.error.message)
      );
  }

}
