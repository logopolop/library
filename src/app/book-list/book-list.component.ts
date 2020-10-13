import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: any;
  bookSubscription: Subscription;

  displayedColumns: string[] = ['title', 'author', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private router: Router, private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookSubscription = this.bookService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = new MatTableDataSource(books);
        this.books.sort = this.sort;
        this.books.paginator = this.paginator;
      }
    );
    this.bookService.emitBooks();
  }

  onDeleteBook(book: Book) {
    this.bookService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.books.filter = filterValue.trim().toLowerCase();
  }

}