import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthState } from 'src/app/constant/enum/authstate.enum';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'cluster-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  authState: AuthState = AuthState.LOGIN;
  AuthState = AuthState;
  backButtonIcon = faAngleLeft;

  authForm = this.formBuilder.group({
    username: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
  });

  subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenService,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Clusterdev | Auth ');
    meta.addTags([
      { name: 'keywords', content: 'clusterdev auth , login clusterdev , create new account on clusterdev , clusterdev login ' },
      { name: 'description', content: 'log in and create new account in clusterdev to get amazing content from cluster newsletter.' },
      { name: 'robots', content: 'clusterdev auth , login clusterdev , create new account on clusterdev , clusterdev login' }
    ]);
  }

  ngOnInit(): void {
  }

  login(): void {
    // TODO: Use EventEmitter with form value
    if (this.authState === AuthState.LOGIN) {
      if (this.authForm.get('email')?.valid && this.authForm.get('password')?.valid) {
        this.loginUser();
      }
    } else {
      if (this.authForm.get('username')?.value.length > 1 && this.authForm.get('username')?.value.length <= 15) {
        if (this.authForm.get('email')?.valid && this.authForm.get('password')?.valid) {
          this.registerUser();
        }
      } else {
        alert('Invalid username. Username must contain 1 to 10 letter only.');
      }
    }
  }

  loginUser(): void {
    const { email, password } = this.authForm.value;
    this.subscription = this.authService.login(email, password).subscribe(
      (response: any) => {
        this.tokenService.token = response.access_token;
        this.router.navigate(['./../'], { relativeTo: this.route });
      },
      error => alert(error.error.message));
  }
  registerUser(): void {
    const { username, email, password } = this.authForm.value;
    this.subscription = this.authService.register(username, email, password).subscribe(
      (response: any) => {
        this.tokenService.token = response.access_token;
        this.router.navigate(['./../'], { relativeTo: this.route });
      },
      error => alert(error.error.message));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
