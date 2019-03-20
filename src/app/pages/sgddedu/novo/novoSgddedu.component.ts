import { Component, ViewChild } from '@angular/core';
import { SGDDModel } from '../../../shared/models/sgdd-model';

@Component({
  selector: 'app-novoSgddedu',
  templateUrl: './novoSgddedu.component.html',
  styleUrls: ['./novoSgddedu.component.scss']
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
    audio = [];
    programacao = [];
    objetivosPedagogicos = [];

    placeholder: string = "::SELECIONE::";

    selectedWord: string;

    constructor() { 
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

  addKeyWord(category: string, input: any){
      if(this.selectedWord != undefined && this.selectedWord != ""){
          switch(category){
              case this.categories.arts:
                  this.artes.push(this.selectedWord);
              break;
              case this.categories.audio:
                  this.audio.push(this.selectedWord);
              break;
              case this.categories.programming:
                  this.programacao.push(this.selectedWord);
              break;
              case this.categories.pedagogicalGoals:
                  this.objetivosPedagogicos.push(this.selectedWord);
              break;
          }
          input.focus();
          input.setSelectionRange(input.selectionEnd, input.selectionEnd);
      }
  }

  selectionchange(ev: any){
    let start = ev.target.selectionStart;
    let end = ev.target.selectionEnd;
    this.selectedWord = ev.target.value.substr(start, end - start);
  }

}
