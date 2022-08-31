import { Directive, Input, ElementRef } from '@angular/core';
@Directive({
  selector: '[movieList]'
})
export class ListDirective {
  private _list!: Object;
  constructor(private el: ElementRef) { }
  @Input()
  set movieList(movie: any) {
    let temp = `<img class=""
    style="width:33%; margin:auto"
    src="${movie.Poster}"
    alt="poster du film ${movie.Title}">`;
    temp += `<a class="list-group-item list-group-item-action">`;
    temp +=
      `Titre : ${movie.Title} / Année : ${movie.Year} / Réalisateur : ${movie.Director}`; // movie.Poster Ratings BoxOffice
    temp += ` / Ratings : ${movie.Ratings[0].Value} / BoxOffice : ${movie.BoxOffice}`;
    temp += '</a>';
    this.el.nativeElement.innerHTML = temp;
  }
}
