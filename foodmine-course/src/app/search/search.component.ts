import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  serchTerm: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  Search(): void {
    if (this.serchTerm) {
      this.router.navigateByUrl('/search/' + this.serchTerm);
    }
    else{
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit():void{
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
      {
        this.serchTerm=params['searchTerm'];
      }

    })
  }
}
