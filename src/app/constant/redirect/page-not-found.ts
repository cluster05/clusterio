import { Router } from "@angular/router";

export const redirectToPageNotFound = (router: Router, error: string) => {
    const regex = /\ /gi;
    const buildError = error.replace(regex, '-');
    router.navigate(['/page-not-found'], { queryParams: { error: buildError } })
}