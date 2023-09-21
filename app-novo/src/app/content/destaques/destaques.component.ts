import { Component } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {
// Lista de dados para os cartões
dadosDosCartoes = [
  {
    titulo: "Assassin's Creed Valhalla",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Aventura",
    tamanho: "90 GB",
    plataforma: "PC"
  },
  {
    titulo: "The Witcher 3: Wild Hunt",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "60 GB",
    plataforma: "PlayStation 4"
  },
  {
    titulo: "Red Dead Redemption 2",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação/Aventura",
    tamanho: "105 GB",
    plataforma: "Xbox One"
  },
  {
    titulo: "Cyberpunk 2077",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "70 GB",
    plataforma: "PC"
  },
  {
    titulo: "FIFA 22",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Esportes",
    tamanho: "45 GB",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "The Last of Us Part II",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação/Aventura",
    tamanho: "80 GB",
    plataforma: "PlayStation 4"
  },
  // Mais 10 jogos
  {
    titulo: "GTA V",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação",
    tamanho: "100 GB",
    plataforma: "Xbox Series X"
  },
  {
    titulo: "Minecraft",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Sandbox",
    tamanho: "200 MB",
    plataforma: "Nintendo Switch"
  },
  {
    titulo: "The Legend of Zelda: Breath of the Wild",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Aventura",
    tamanho: "13 GB",
    plataforma: "Nintendo Switch"
  },
  {
    titulo: "Counter-Strike: Global Offensive",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "FPS",
    tamanho: "15 GB",
    plataforma: "PC"
  },
  {
    titulo: "Among Us",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação",
    tamanho: "150 MB",
    plataforma: "iOS"
  },
  {
    titulo: "The Elder Scrolls VI",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "PC"
  },
  {
    titulo: "Horizon Forbidden West",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação/Aventura",
    tamanho: "TBA",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "Starfield",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "PC"
  },
  {
    titulo: "Elden Ring",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "Hogwarts Legacy",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Aventura",
    tamanho: "TBA",
    plataforma: "PC"
  },
  {
    titulo: "God of War Ragnarok",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação/Aventura",
    tamanho: "TBA",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "Metroid Prime 4",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação/Aventura",
    tamanho: "TBA",
    plataforma: "Nintendo Switch"
  },
  {
    titulo: "Fable (2023)",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "Xbox Series X"
  },
  {
    titulo: "Elden Ring",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "Hogwarts Legacy",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Aventura",
    tamanho: "TBA",
    plataforma: "PC"
  },
  {
    titulo: "Starfield",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "PC"
  },
  {
    titulo: "Elden Ring",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "Horizon Forbidden West",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação/Aventura",
    tamanho: "TBA",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "The Elder Scrolls VI",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "PC"
  },
  {
    titulo: "God of War Ragnarok",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Ação/Aventura",
    tamanho: "TBA",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "CyberConnect2's New RPG",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "RPG",
    tamanho: "TBA",
    plataforma: "PlayStation 5"
  },
  {
    titulo: "Untitled Sci-Fi Adventure",
    imagemUrl: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    categoria: "Aventura",
    tamanho: "TBA",
    plataforma: "PC"
  }
];


// Configurações do paginador
pageSize = 8; // Quantidade de itens por página
pageIndex = 0; // Página atual

// Método para lidar com a alteração de página
paginaAlterada(event: any) {
  this.pageIndex = event.pageIndex;
}
}
