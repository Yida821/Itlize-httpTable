import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { GetPostsService } from './get-posts.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'httpTable';

  ngOnInit() {}
  // listPost: Post[];

  // newId: string;
  // newUserId: string;
  // newTitle: string;
  // newBody: string;

  // constructor(private getPostsService: GetPostsService) {}

  // ngOnInit() {
  //   this.getPosts();
  // }

  // getPosts() {
  //   this.getPostsService.getPosts().subscribe((data) => {
  //     //console.log(data);
  //     this.listPost = data;
  //     //console.log(typeof this.posts);
  //   });
  // }
  // deletePostById(id: any) {
  //   //console.log('in the delete post function' + ' this id =' + id);
  //   this.getPostsService.deletePost(id).subscribe(
  //     (data) => {
  //       console.log(data);
  //       //this.getPosts();
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   this.listPost = this.listPost.filter((post) => post.id !== id);
  // }

  // enterId(event) {
  //   this.newId = event.target.value;
  // }
  // enterUserId(event) {
  //   this.newUserId = event.target.value;
  // }
  // enterTitle(event) {
  //   this.newTitle = event.target.value;
  // }
  // enterBody(event) {
  //   this.newBody = event.target.value;
  // }

  // addPOST() {
  //   // console.log('add post!');
  //   // console.log(this.newId);
  //   // console.log(this.newUserId);
  //   // console.log(this.newTitle);
  //   // console.log(this.newBody);
  //   // pass new created post to the back-end
  //   this.getPostsService.addPost(
  //     this.newId,
  //     this.newUserId,
  //     this.newTitle,
  //     this.newBody
  //   );
  //   //display in the front end
  //   let newPost: Post = new Post(
  //     this.newId,
  //     this.newUserId,
  //     this.newTitle,
  //     this.newBody
  //   );
  //   this.listPost.push(newPost);
  // }

  // updatePost(id) {
  //   console.log('in the update function: ' + id);
  //   let promptTitle = ['Update UserId', 'Update Title', 'Update Body'];
  //   let updateList = [];
  //   for (let update of promptTitle) {
  //     let temp = prompt(update);

  //     updateList.push(temp);
  //   }
  //   //console.log(updateList);
  //   this.getPostsService.updatePost(
  //     id,
  //     updateList[0],
  //     updateList[1],
  //     updateList[2]
  //   );

  //   // Display in the front end
  //   console.log(id);
  //   this.listPost[id - 1]['userId'] = updateList[0];
  //   this.listPost[id - 1]['title'] = updateList[1];
  //   this.listPost[id - 1]['body'] = updateList[2];
  // }
}
