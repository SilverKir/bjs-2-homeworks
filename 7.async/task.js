class AlarmClock {
	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	};

	addClock(time, callback) {
		if (arguments.length < 2 || !time) {
			throw new Error('Отсутствуют обязательные аргументы');
		};

		if (this.alarmCollection.filter((alarm) => alarm.time === time).length > 0) {
			console.warn('Уже присутствует звонок на это же время');
		};

		this.alarmCollection.push({
			time: time,
			callback: callback,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		let now = new Date();
		return ((now.getHours() < 10 ? '0' : '') + now.getHours()) +
			":" +
			((now.getMinutes() < 10 ? '0' : '') + now.getMinutes());
	}

	start() {
		if (!this.intervalId) {
			this.intervalId = setInterval(
				this.alarmCollection.forEach(element => {
					if (element.time === this.getCurrentFormattedTime() &&
						element.canCall) {
						element.canCall = false;
						element.callback()
					}
				}),
				1000
			)
		};
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(element => {
			element.canCall = true
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}