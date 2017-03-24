import Ember from 'ember';

export default Ember.Component.extend({
    newQuestionForm: false,

    actions: {
        questionFormShow() {
                this.set('newQuestionForm', true);
        },

        saveQuestion() {
            var params = {
                author: this.get('author'),
                note: this.get('note'),
                content: this.get('content')
            };
            this.set('newQuestionForm', false);
            this.sendAction('saveQuestion', params);
        }
    }
});
