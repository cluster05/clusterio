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

  }

  ngOnInit(): void {

    this.title.setTitle('Clusterdev | Auth ');
    this.meta.updateTag(
      { name: 'keywords', content: 'clusterdev auth , login clusterdev , create new account on clusterdev , clusterdev login ' },
    );
    this.meta.updateTag(
      { name: 'description', content: 'log in and create new account in clusterdev to get amazing content from cluster newsletter.' },
    );
    this.meta.updateTag(
      { name: 'robots', content: 'clusterdev auth , login clusterdev , create new account on clusterdev , clusterdev login' }
    );
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
        alert('Invalid username. Username must contain 2 to 15 letter only.');
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
