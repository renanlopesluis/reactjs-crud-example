import axios from 'axios'

export default class BasicCaringService {

  baseUrl = 'http://localhost:8080/petstore/';
  bathUrl = "bath"
  hairCareUrl = "hair";
  workOptions = [];
  hairCareTypes = [];
  bathTypes = [];
 
  constructor() { 
    this.loadWorkOptions();
    this.loadBathTypes();
    this.loadHairCareTypes();
  }

  getWorkOptions(){
    return this.workOptions;
  }

  getWorks(codeService){
    switch(codeService){
      case 1: return this.bathTypes;
      case 2: return this.hairCareTypes;
      default: return [];
    }
  }

  executeWork(basiceServiceCode, petId, serviceCode){
    if(basiceServiceCode === 1){
      return this.doBath(petId, serviceCode);
    }else if(basiceServiceCode === 2){
      return this.doHairCare(petId,serviceCode);
    }
  }

  doBath(petId, serviceCode){
    return axios.put(this.baseUrl.concat(this.bathUrl), {petId: petId, serviceCode: serviceCode });
  }

  doHairCare(petId, serviceCode){
    return axios.put(this.baseUrl.concat(this.hairCareUrl), {petId: petId, serviceCode: serviceCode });
  }

  loadWorkOptions(){
    this.workOptions = [
      {
        code: 1,
        description: "Bath"
      },
      {
        code: 2,
        description: "Hair Care"
      }
    ]
  }

  loadHairCareTypes(){
    this.hairCareTypes = [
      {
        code: 1,
        description: "Short hair"
      },
      {
        code: 2,
        description: "Long hair"
      }
    ]
  }

  loadBathTypes(){
    this.bathTypes = [
      {
        code: 1,
        description: "Dry bath"
      },
      {
        code: 2,
        description: "Water bath"
      },
      {
        code: 3,
        description: "Perfumeful bath"
      },
      {
        code: 4,
        description: "Perfumeless bath"
      }
    ]
  }
}
