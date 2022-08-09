import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastService } from 'src/app/core/services/cast.service';
import { Cast } from 'src/app/shared/models/Cast';
import { CastDetails } from 'src/app/shared/models/CastDetails';
@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css'],
})
export class CastDetailsComponent implements OnInit {
  cast!: CastDetails;
  castId!: number;
  constructor(
    private castService: CastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.castId = params['castId'];
      console.log(params['castId']);
    });

    this.castService.getCastDetails(this.castId).subscribe((c) => {
      this.cast = c;
      console.log(c);
    });
  }
}
