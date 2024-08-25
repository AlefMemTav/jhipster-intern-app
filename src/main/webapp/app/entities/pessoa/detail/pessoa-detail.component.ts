import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPessoa } from '../pessoa.model';
import { DataUtils } from 'app/core/util/data-util.service';
import { CountryService } from 'app/entities/country/service/country.service';
import { Country } from 'app/entities/country/model/country';

@Component({
  selector: 'jhi-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
})
export class PessoaDetailComponent implements OnInit {
  pessoa: IPessoa | null = null;
  countries: Country[] = [];

  constructor(protected dataUtils: DataUtils, protected activatedRoute: ActivatedRoute, protected countryService: CountryService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ pessoa }) => {
      this.pessoa = pessoa;
    });

    this.countryService.listAll().subscribe(contries => (this.countries = contries));
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  previousState(): void {
    window.history.back();
  }
}
