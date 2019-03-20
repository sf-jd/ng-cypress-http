import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  readonly ROOT_URL = "https://jsonplaceholder.typicode.com";

  posts: any;
  users: any;
  constructor(private http: HttpClient) {}

  title = "JSON PlaceHolder meets nG & Cypress";

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + "/posts");
  }

  getUsers() {
    this.users = this.http.get(this.ROOT_URL + "/users");
  }

  getPostsByUser() {
    this.posts = this.http.get(this.ROOT_URL + "/posts?userId=1");
  }
}
