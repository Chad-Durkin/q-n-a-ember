// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model(params) {
//     return this.store.findRecord('question', params.question_id);
//   },
//   actions: {
//     saveAnswer() {
//       var params = {
//         response:  this.get('response'),
//         author: this.get('author'),
//         question:  this.get('model')
//       };
//       var newAnswer = this.store.createRecord('answer', params);
//       newAnswer.save()
//       var theQuestion = params.question;
//       theQuestion.get('answers').addObject(newAnswer);
//       theQuestion.save();
//       this.transitionTo('index');
//     }
//   }
// });
