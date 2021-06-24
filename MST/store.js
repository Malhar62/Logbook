import { castToReferenceSnapshot, destroy, getSnapshot, types, Instance } from "mobx-state-tree";
const URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-j5PJRX4f6Ykaa2SrlVbJeiqGk0cRAzfUQ&usqp=CAU'
const licenceData = types.model({
  number: types.string,
  exp: types.string,
  state: types.string,
  Country: types.string
});
const timelogData = types.model({
  name: types.string,
  Licence: types.string,
  job: types.string,
  company: types.string,
  category: types.string,
  task: types.string,
  description: types.string,
  startDate: types.string,
  endDate: types.string,
  startTime: types.string,
  endTime: types.string,
  image: types.frozen(image)
});
const image = types.model({
  link: types.string
})
const RootStore = types
  .model({
    licences: types.optional(types.array(licenceData), []),
    logs: types.optional(types.array(timelogData), []),
    images: types.optional(types.array(image), [{ link: URL }]),
    tasks: types.optional(types.string, ''),
    categories: types.optional(types.string, ''),
    desp: types.optional(types.string, '')
  })

  .actions((self) => ({
    updateLicence(data) {
      let obj = {
        number: data.number,
        exp: data.exp,
        state: data.state,
        Country: data.Country,
      }
      let array = [...self.licences];
      array.splice(data.index, 1, obj);
      self.licences = [...array];
    },
    addLog(data) {
      let obj = {
        name: data.name,
        Licence: data.Licence,
        job: data.job,
        company: data.company,
        category: store.categories,
        task: store.tasks,
        description: store.desp,
        startDate: data.startDate,
        endDate: data.endDate,
        startTime: data.startTime,
        endTime: data.endTime,
        image: getSnapshot(self.images)
      }
      self.logs.push(obj);
      self.images = [{ link: URL }];
      console.log(self.logs)
    },
    addImage(data) {
      self.images.push(data)
    },
    setTask(data) {
      self.tasks = data;
      console.log('task: ', self.tasks)
    },
    setCategory(data) {
      self.categories = data;
      console.log('cat: ', self.categories)
    },
    setDesp(data) {
      self.desp = data;
      console.log('desp: ', self.desp)
    }
  }));
export const store = RootStore.create({
  licences: [
    { number: 'HLS3ITS8', exp: '05-05-2021', state: 'Victoria', Country: 'Australia', flag: false },
    { number: 'L3BCZ7N5', exp: '22-02-2022', state: 'Queensland', Country: 'Australia', flag: false },
    { number: 'MR3CV94T', exp: '10-10-2021', state: 'Victoria', Country: 'Australia', flag: false },
  ]
});
