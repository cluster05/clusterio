import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStateManagerService } from 'src/app/shared/services/auth-state-manager.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenService } from 'src/app/shared/services/token.service';
@Component({
  selector: 'cluster-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenService,
    private authStateManager: AuthStateManagerService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    // TODO: Use EventEmitter with form value
    if (this.authForm.get('email')?.valid && this.authForm.get('password')?.valid) {
      const { email, password } = this.authForm.value;
      this.authService.login(email, password).subscribe((response: any) => {
        this.tokenService.token = response.access_token;
        this.authStateManager.changeAuthState(true);
        this.router.navigate(['./../dashboard'], { relativeTo: this.route });
      });
    }

  }

}
