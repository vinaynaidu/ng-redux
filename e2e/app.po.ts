import { browser, by, element } from 'protractor';
import { WebElement } from 'selenium-webdriver';
import { ElementFinder } from 'protractor/built/element';

export class AppPage {

  navigateTo(path: string = '/') {
    return browser.get(path);
  }

  getElementText(selector: string) {
    return this.getSingleElement(selector).getText();
  }

  // Queries single matching element.
  // Returns undefined if multiple elements are matched.
  getSingleElement(selector: string) {
    return element(by.css(`app-root ${selector}`));
  }

  // Queries multiple matching elements
  getElements(selector: string) {
    return element.all(by.css(`app-root ${selector}`));
  }

  pauseBrowser() {
    browser.pause();
  }

}
