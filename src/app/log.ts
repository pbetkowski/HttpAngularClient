import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

export class SpyInterceptor implements HttpInterceptor {
  // dodać do modułów w app.moduke
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    console.log('Data zapytania: ', new Date());
    console.log('Wykonane na adres: ', req.url);
    return next.handle(req);
  }
}
