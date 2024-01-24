// +994 5*****178

export function formatPhoneNumber(phoneNumber) {
	// Проверяем, достаточно ли длинная строка
	if (phoneNumber.length < 10) {
		return phoneNumber;
	}

	phoneNumber = String(phoneNumber)

	// Разделяем строку на три части
	let visibleStartPrev = phoneNumber.slice(0, 3);
	let visibleStart = phoneNumber.slice(3, 4);
	let hiddenPart = phoneNumber.slice(4, -3).replace(/\d/g, "*"); // Скрываем цифры, кроме последних трех
	let visibleEnd = phoneNumber.slice(-3); // Последние 3 цифры видны

	return `+${visibleStartPrev} ${visibleStart}${hiddenPart}${visibleEnd}`;
}