import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/constant/interface/course.interface';

@Component({
  selector: 'cluster-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  courseBuilder: Course = {
    title: '',
    description: '',
    courseImageUrl: '',
    content: [],
  }
  courseImageUrl = ''
  courseUpdatingMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event: any): void {
    const file = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('image', file);
    // this.articleService.uploadArticleImage(uploadData)
    //   .subscribe(
    //     res => {
    //       alert('Uplaod Image Successfully.');
    //       this.isImageUploaded = true;
    //       this.imageSrc = res.imageURL;
    //       this.postImageLinkUrl.emit(this.imageSrc);
    //     },
    //     error => alert(error.error.message)
    //   );
  }


  postCourse(): void { }

}
