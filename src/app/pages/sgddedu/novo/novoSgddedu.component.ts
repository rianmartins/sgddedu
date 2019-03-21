import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { SGDDModel } from '../../../shared/models/sgdd-model';
import { HighlightTag } from 'angular-text-input-highlight';

@Component({
  selector: 'app-novoSgddedu',
  templateUrl: './novoSgddedu.component.html',
  styleUrls: ['./novoSgddedu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NovoSgddeduComponent  {

    componentesCurriculares = [];
    niveisEnsino = [];
    unidadesTematicas = [];
    objetosConhecimentos = [];
    habilidades = [];
    teoriasPedagogicas = [];
    sgdd: SGDDModel;
    categories: any;

    artes = [];
    artesList: string;
    audio = [];
    audioList: string;
    programacao = [];
    programacaoList: string;
    objetivosPedagogicos = [];
    objetivosPedagogicosList: string;

    placeholder: string = "::SELECIONE::";

    selectedWord: string;

    tags: HighlightTag[] = [];

    constructor(private ref: ChangeDetectorRef) { 
        this.sgdd = {
            componenteCurricularId: 1,
            nivelEnsinoId: 2,
            unidadeTematicaId: 1,
            objetoConhecimentoId: 2,
            habilidadeId: 1,
            teoriaPedagogicaId: 2
        };

        this.categories = {
            "arts": "artes",
            "audio": "audio",
            "programming": "programacao",
            "pedagogicalGoals": "objetivosPedagogicos"
        }

        // componentesCurriculares
        this.componentesCurriculares = [
            {
                id: "1",
                text: "Matemática"
            },
            {
                id: "2",
                text: "Português"
            },
            {
                id: "3",
                text: "Ciências"
            }
        ];
        // niveisEnsino
        this.niveisEnsino = [
            {
                id: "1",
                text: "Ensino Fundamental I"
            },
            {
                id: "2",
                text: "Ensino Fundamental II"
            },
            {
                id: "3",
                text: "Ensino Médio"
            }
        ];
        // unidadesTematicas
        this.unidadesTematicas = [
            {
                id: "1",
                text: "Unidade temática 1"
            },
            {
                id: "2",
                text: "Unidade temática 2"
            },
            {
                id: "3",
                text: "Unidade temática 3"
            }
        ];
        // objetosConhecimentos
        this.objetosConhecimentos = [
            {
                id: "1",
                text: "objeto de Conhecimento 1"
            },
            {
                id: "2",
                text: "objeto de Conhecimento 2"
            }
        ];
        // habilidades
        this.habilidades = [
            {
                id: "1",
                text: "Habilidade 1"
            }
        ];
        // teoriasPedagogicas
        this.teoriasPedagogicas = [
            {
                id: "1",
                text: "Teoria pedagógica 1"
            },
            {
                id: "2",
                text: "Teoria pedagógica 2"
            }
        ];
    }
    

  public value: any = {};
  public disabled: boolean = false;

  selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  addKeyWord(category: string, input: any, highlightText: any){
      if(this.selectedWord != undefined && this.selectedWord != ""){
          switch(category){
              case this.categories.arts:
                  this.artes.push({"word":this.selectedWord, "startIndex": input.selectionStart});
                  this.highlightKeyWord(input, category,'bg-yellow');
              break;
              case this.categories.audio:
                  this.audio.push({"word":this.selectedWord, "startIndex": input.selectionStart});
                  this.highlightKeyWord(input, category,'bg-blue');
              break;
              case this.categories.programming:
                  this.programacao.push({"word":this.selectedWord, "startIndex": input.selectionStart});
                  this.highlightKeyWord(input, category,'bg-orange');
              break;
              case this.categories.pedagogicalGoals:
                  this.objetivosPedagogicos.push({"word":this.selectedWord, "startIndex": input.selectionStart});
                  this.highlightKeyWord(input, category,'bg-purple');
              break;
          }
          this.updateList(highlightText);
      }
  }

  selectionchange(ev: any){
    let start = ev.target.selectionStart;
    let end = ev.target.selectionEnd;
    this.selectedWord = ev.target.value.substr(start, end - start);
  }

  highlightKeyWord(input: any, category: string, cssClass: string){
        this.tags.push({
            indices: { start: input.selectionStart, end: input.selectionEnd },
            cssClass: cssClass,
            data: { "category": category, "startIndex": input.selectionStart }
        });
        input.focus();
        input.setSelectionRange(input.selectionEnd, input.selectionEnd);
        // input.update();
  }

  tagHover(elm: HTMLElement){
    if (elm.classList.contains('bg-yellow')) {
        elm.classList.add('bg-yellow-dark');
    } else if (elm.classList.contains('bg-blue')) {
        elm.classList.add('bg-blue-dark');
    } else if (elm.classList.contains('bg-orange')) {
        elm.classList.add('bg-orange-dark');
    } else if (elm.classList.contains('bg-purple')) {
        elm.classList.add('bg-purple-dark');
    }
  }

  tagHoverOff(elm: HTMLElement){
    elm.classList.remove('bg-yellow-dark');
    elm.classList.remove('bg-blue-dark');
    elm.classList.remove('bg-orange-dark');
    elm.classList.remove('bg-purple-dark');
  }

  removeTag(tag, highlightText){
    this.tags.splice(this.tags.findIndex(t => t === tag),1);
    eval('this.' + tag.data.category).splice(eval('this.' + tag.data.category).findIndex(i => i.startIndex === tag.indices.start),1);
    this.updateList(highlightText);
  }

  updateList(highlightText: any){
      this.artesList = this.artes.map(i => i.word).join(', ');
      this.audioList = this.audio.map(i => i.word).join(', ');
      this.programacaoList = this.programacao.map(i => i.word).join(', ');
      this.objetivosPedagogicosList = this.objetivosPedagogicos.map(i => i.word).join(', ');

      highlightText.textInputElementChanged();
  }

  onInput(event){
      console.log(event);
      console.log(event.target.selectionStart);
  }

  onPaste(event){
    console.log(event.clipboardData.getData('text/plain').length);
}

}
