import { ControleDeEncomendasPage } from './app.po';

describe('controle-de-encomendas App', () => {
  let page: ControleDeEncomendasPage;

  beforeEach(() => {
    page = new ControleDeEncomendasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
