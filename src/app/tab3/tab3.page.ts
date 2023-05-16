import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController)
  {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Michelle Yeoh Choo-Kheng',
      lancamento: 'Atriz',
      duracao: '',
      classificacao: 8,
      cartaz: 'https://br.web.img2.acsta.net/pictures/17/09/20/10/22/2250952.jpg',
      generos: [''],
      pagina: '/tetolamt',
      favorito: false
    },
    {
      nome: 'Michael B. Jordan',
      lancamento: 'Ator',
      duracao: '',
      classificacao: 9,
      cartaz: 'https://br.web.img2.acsta.net/pictures/18/08/08/18/23/1187644.jpg',
      generos: [''],
      pagina: '/creed',
      favorito: false
    },
    {
      nome: 'Taron Egerton',
      lancamento: 'Ator',
      duracao: '',
      classificacao: 7,
      cartaz: 'https://flxt.tmsimg.com/assets/765421_v9_bd.jpg',
      generos: [''],
      pagina: '/tetris',
      favorito: false
    }
  ];
  exibirFilme(filme: IFilme){
    const NavigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],NavigationExtras);
  }
}
