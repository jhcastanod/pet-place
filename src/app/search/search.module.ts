import { Directionality } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SearchComponent } from './components/search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { MatCommonModule } from '@angular/material/core';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SearchComponent, ResultItemComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FlexLayoutModule, // TODO: Move to sharedModule
    MatInputModule, // TODO: Move to sharedModule
    MatFormFieldModule, // TODO: Move to sharedModule
    MatCommonModule,
    FormsModule
  ],
  providers: [Directionality] // TODO: Move to sharedModule
})
export class SearchModule { }
