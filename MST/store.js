import { destroy, types } from "mobx-state-tree";
const licenceData = types.model({
 number:types.string,
 exp:types.string,
 state:types.string,
 Country:types.string
});
const RootStore = types
  .model({
    licences: types.optional(types.array(licenceData), []),
  })

  .actions((self) => ({
   updateLicence(data){
    let obj = {
      number: data.number,
      exp: data.exp,
      state: data.state,
      Country: data.Country,
  }
    let array=[...self.licences];
    array.splice(data.index,1,obj);
    self.licences=[...array];
   }
  }));
export const store = RootStore.create({
    licences:[
        { number: 'HLS3ITS8', exp: '05-05-2021', state: 'Victoria', Country: 'Australia', flag: false },
        { number: 'L3BCZ7N5', exp: '22-02-2022', state: 'Queensland', Country: 'Australia', flag: false },
        { number: 'MR3CV94T', exp: '10-10-2021', state: 'Victoria', Country: 'Australia', flag: false },
    ]
});
