import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/constant/interface/course.interface';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { CourseService } from 'src/app/shared/services/course.service';

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

  constructor(
    private courseService: CourseService,
    private articleService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getPostOfType();

    const courseId = this.route.snapshot.paramMap.get('courseId') as string;
    if (courseId) {
      this.courseUpdatingMode = true;
      this.courseService.readCourse(courseId).subscribe(
        response => {
          this.courseBuilder = response;
          this.userAddedArticle = response.content as Article[];
        },
        error => alert(error.error.message)
      );
    }
  }

  onFileChanged(event: any): void {
    const file = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('image', file);
    this.courseService.uploadCourseImage(uploadData)
      .subscribe(
        res => {
          alert('Uplaod Image Successfully.');
          this.courseBuilder.courseImageUrl = res.imageURL;
        },
        error => alert(error.error.message)
      );
  }

  getPostOfType(): void {
    this.articleService.readAllArticleAdmin(this.typeOfPostWantToAdd)
      .subscribe(
        response => this.posts = response,
        error => alert(error.error.message)
      );
  }

  addArticleToCourse(postId: string): void {
    const isArticleAlradyPresent = this.userAddedArticle.find(post => postId === post.id);
    if (isArticleAlradyPresent) {
      alert('post alrady present');
    } else {
      const courseId = this.courseBuilder.id as string;
      const article = this.posts.filter(post => postId === post.id);
      // article add must required course id ;
      this.courseService.createCourseArticle(courseId, postId).subscribe(
        response => {
          this.userAddedArticle = [...this.userAddedArticle, ...article];
        },
        error => alert(error.error.message)
      );
    }
  }

  removeArticleFromCourse(postIdType: any): void {
    const postId = postIdType as string;
    const courseId = this.courseBuilder.id as string;
    this.courseService.deleteCourseArticle(courseId, postId)
      .subscribe(
        response => {
          this.userAddedArticle = this.userAddedArticle.filter(post => postId !== post.id);
        }
        , error => alert(error.error.message)
      );
  }


  postCourse(): void {

    const content: string[] = this.userAddedArticle.map(article => article.id) as string[];
    this.courseBuilder.content = content;

    this.courseService.createCourse(this.courseBuilder)
      .subscribe(response => {
        this.router.navigate(['/cryptic/courses']);
      },
        error => alert(error.error.message)
      );
  }

}
