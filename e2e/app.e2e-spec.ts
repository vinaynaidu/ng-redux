import { AppPage } from './app.po';

describe('bi-portal App', () => {

  describe('Given the app has started', () => {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
      page.navigateTo();
    });

    it('Should display Logo header', () => {
      expect(page.getElementText('.navbar-brand')).toEqual('BIBI');
    });

    it('Should show five menu items', () => {
      expect(page.getElements('.menu-bar__item').count()).toBe(5);
    });

    it('Should display three collapsible list items', () => {
      expect(page.getElements('.collapsible-list').count()).toBe(3);
    });

    it('Should expand "Favourite Workbooks"', () => {
      const selector = '.collapsible-list';

      expect(page.getElementText(`${selector} .collapsible-list__title`)).toBe('Favourite Workbooks');
      expect(page.getElements(selector).getAttribute('class')).not.toContain('collapsible-list--collapsed');
    });

    it('Should not expand "My History"', () => {
      const selector = '.collapsible-list:nth-of-type(2)';

      expect(page.getElementText(`${selector} .collapsible-list__title`)).toBe('My History');
      expect(page.getElements(selector).getAttribute('class')).toContain('collapsible-list--collapsed');
    });

    it('Should expand "Newsletters"', () => {
      const selector = '.collapsible-list:nth-of-type(3)';

      expect(page.getElementText(`${selector} .collapsible-list__title`)).toBe('Newsletters');
      expect(page.getElements(selector).getAttribute('class')).toContain('collapsible-list--collapsed');
    });

  });

});
