import { Injectable } from '@angular/core';
import { DocList } from 'src/app/interfaces/doc-list/doc-list.interface';
import { Doc } from 'src/app/interfaces/doc/doc.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocListService {
  constructor(private http: HttpClient) {}

  docList: DocList[] = [];
  parentFolders: string[] = [];
  fileurl: string = '';

  getDocList() {
    this.http
      .get<DocList[]>('http://localhost:3000/2710189471/')
      .subscribe((data) => (this.docList = data));
  }

  sortDocList() {
   
  }
}
