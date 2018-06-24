import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';


export class AuthInterceptor implements HttpInterceptor {

  private headers = new HttpHeaders().set('Authorization', 'testToken');

  // dodać do app.module providers
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    // pozwala zmodyfikować zapytanie
    const reqCloned = req.clone({headers: this.headers});
    return next.handle(reqCloned);  // nową wersję zapytania wysyłamy na serwer
  }
}
