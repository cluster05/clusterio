import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/constant/interface/course.interface';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  posts: Article[] = [];
  userAddedArticle: Article[] = [];
  courseBuilder: Course = {
    title: '',
    description: '',
    courseImageUrl: '',
    content: [],
  };
  courseImageUrl = '';
  courseUpdatingMode = false;
  typeOfPostWantToAdd = 'article';

  constructor(private articleService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPostOfType();

    const courseId = this.route.snapshot.paramMap.get('courseId') as string;
    if (courseId) {
      this.courseUpdatingMode = true;
    }
    // const postId = this.route.snapshot.paramMap.get('postId') as string;

    // api call to get course content
    //  _> api call to get course aritlce
  }

  onFileChanged(event: any): void {
    const file = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('image', file);
    // api call to save image
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

  getPostOfType(): void {
    this.articleService.readAllArticle(this.typeOfPostWantToAdd)
      .subscribe(
        response => this.posts = response,
        error => alert(error.error.message)
      );
  }

  addArticleToCourse(postId: string): void {
    const isArticleAlradyPresent = this.userAddedArticle.find(post => postId === post.id);
    if (isArticleAlradyPresent) {
      alert('post alrady present')
    } else {
      const article = this.posts.filter(post => postId === post.id);
      this.userAddedArticle = [...this.userAddedArticle, ...article];
    }
  }

  removeArticleFromCourse(postIdType: any): void {
    const postId = postIdType as string;
    this.userAddedArticle = this.userAddedArticle.filter(post => postId !== post.id);
  }


  postCourse(): void {
    // create new course update
  }

}
