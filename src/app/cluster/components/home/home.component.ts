import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cluster-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'React', 'Flutter', 'MongoDB', 'Node', 'Express'];
  skill = '';
  studentCount = 100;

  constructor() { }

  ngOnInit(): void {

    let index = 0;
    let n = 0;
    let up = true;

    setInterval(() => {
      const word = this.skills[index];
      const length = word.length;

      if (up) {
        this.skill = word.slice(0, n);
        n++;
      }
      if (n === length + 1) { up = false; }
      if (!up) {
        this.skill = word.slice(0, n);
        n--;
      }
      if (n === 0) {
        up = true;
        index++;
      }
      if (index === this.skills.length) { index = 0; }

    }, 200);
  }
}
