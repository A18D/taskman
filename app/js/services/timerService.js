'use strict';

taskmanApp.factory('timerService', [
    () => {
        class TimerService {
            constructor() {
                this.timer = null;
                this.startTime = null;

                this.hour = '00';
                this.minute = '00';
                this.second = '00';
            }

            get hours() {
                return this.hour;
            }

            set hours(hours) {
                this.hour = hours;
            }

            get minutes() {
                return this.minute;
            }

            set minutes(minutes) {
                this.minute = minutes;
            }

            get seconds() {
                return this.second;
            }

            set seconds(seconds) {
                this.second = seconds;
            }

            start(callback) {
                let self = this;

                self.startTime = +new Date();

                self.timer = setInterval(() => {
                    let now = +new Date();
                    let timer = new Date(now - self.startTime);

                    self.hours = timer.getHours() - 3;
                    self.minutes = timer.getMinutes();
                    self.seconds = timer.getSeconds();

                    if (self.hours < 10) {
                        self.hours = '0' + self.hours;
                    }
                    if (self.minutes < 10) {
                        self.minutes = '0' + self.minutes;
                    }
                    if (self.seconds < 10) {
                        self.seconds = '0' + self.seconds;
                    }

                    callback(self.hours, self.minutes, self.seconds);
                }, 1000);
            }

            stop() {
                clearInterval(this.timer);
            }
        }

        return new TimerService();
    }
]);