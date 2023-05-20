import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreePropsComponent } from './section-three-props.component';

describe('SectionThreePropsComponent', () => {
  let component: SectionThreePropsComponent;
  let fixture: ComponentFixture<SectionThreePropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionThreePropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionThreePropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
