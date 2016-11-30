export class Question {

    constructor(
        public translation?: number,
        public displayLang?: string,
        public optionLang?: string,
        public optionOne?: string,
        public optionTwo?: string,
        public optionThree?: string,
        public optionFour?: string,
        public corrects?: number,
        public misses?: number,
    ) {}
}