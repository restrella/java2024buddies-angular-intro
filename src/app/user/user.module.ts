import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UserItemComponent],
  imports: [CommonModule],
})
export class UserModule {}
