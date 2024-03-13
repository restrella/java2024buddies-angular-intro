import { UserService } from './../user/services/user.service';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('div') div: any;

  name: string = 'MyName';
  sum = 0;
  buttonName: string = 'Dynamic Value';

  constructor(private userService: UserService) {
    this.name = 'data from constructor';
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    console.log(this.div);
  }
  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.div);
    console.log(this.userService.getUsers());
  }
  ngOnInit(): void {
    console.log('on init');
    console.log(this.div);
  }

  getName(): string {
    return 'Hello';
  }

  getSum(x: number, y: number): void {
    this.sum = x + y;
  }
}
