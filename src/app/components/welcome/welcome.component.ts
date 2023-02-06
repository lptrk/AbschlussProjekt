import { Component, OnInit } from '@angular/core';
import { DocListService } from 'src/app/services/doc-list/doc-list.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private docList : DocListService) { }

  ngOnInit(): void {
  }

onGetDocList(){
this.docList.getDocList();
}

}
