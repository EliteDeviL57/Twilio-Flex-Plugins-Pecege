import { FlexPlugin } from '@twilio/flex-plugin'; //{} define uma importação em um módulo unico
import React from 'react'; //React importa toda a biblioteca react
import CustomTaskListComponent from './components/CustomTaskList/CustomTaskList'; //importa componente renomeando pois o componente é exportado como default

const PLUGIN_NAME = 'CustomInfoPlugin';

export default class protocol extends FlexPlugin { // está exportando o componente de uma classe dentro da outra
  constructor() { //constructor separa um espaço em memória
    super(PLUGIN_NAME); //builda a classe extendida dentro da minha classe
  }
  
  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) { // método que inicia quando o plugin starta
    flex.TaskInfoPanel.Content.add(<CustomTaskListComponent key="protocol"/>); //adiciona o componente react ao 
  }

}
