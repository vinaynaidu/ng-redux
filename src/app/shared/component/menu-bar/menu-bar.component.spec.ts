import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the component is initialised', () => {

    let jqMenuBar: HTMLElement;

    beforeEach(() => {
      component.ngOnInit();
      jqMenuBar = fixture.nativeElement;
    });

    it('Should render nav brand logo', () => {
      const jqBrand = jqMenuBar.querySelector('a.navbar-brand');
      expect(jqBrand.textContent).toEqual('BIBI');
    });

    it('Should render 5 menu items', () => {
      const jqMenuItems = jqMenuBar.querySelectorAll('.menu-bar__label');
      expect(jqMenuItems.length).toEqual(5);
    });

    it('Should display menu items with correct label', () => {
      const jqMenuItems = jqMenuBar.querySelectorAll('.menu-bar__label');
      expect(jqMenuItems[0].textContent).toBe('BIBI');
      expect(jqMenuItems[1].textContent).toBe('Access');
      expect(jqMenuItems[2].textContent).toBe('Support');
      expect(jqMenuItems[3].textContent).toBe('dbTableau');
      expect(jqMenuItems[4].textContent).toBe('Admin');
    });

  });

});
