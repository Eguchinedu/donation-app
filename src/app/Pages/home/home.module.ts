import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreePropsComponent } from './section-three-props/section-three-props.component';
import { SectionFourComponent } from './section-four/section-four.component';
import { SectionFiveComponent } from './section-five/section-five.component';
import { SectionSixComponent } from './section-six/section-six.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    MainPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreePropsComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionSixComponent,
  ],
  imports: [CommonModule, FormsModule, CarouselModule.forRoot()],
  exports: [FormsModule],
})
export class HomeModule {}
