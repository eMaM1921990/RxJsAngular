import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    //of(1, 2, 3, 2, 4).subscribe((d) => console.log(d));
    from([1,2,3,2,2]).subscribe((d) => console.log(d));
  }
}
