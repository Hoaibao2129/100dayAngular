import { Component } from '@angular/core';
import { Author, authors } from 'src/app/data/authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
     authors = authors;
     currentSelect = authors[0]; 

     onSelectAuthor(author : Author) {
       this.currentSelect = author;
     }

     onDeleteAuthor(id : number)  {
        this.authors = this.authors.filter(author => 
          {return author.id !== id ;}  
        )
        this.currentSelect.id === id ? this.currentSelect = this.authors[0] : '';
     }

}
