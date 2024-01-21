const express = require('express');
const xlsx = require('xlsx');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

// 100 победителей на 100 азн
// 10 победителей на 500 азн
// 10 самсунг
// 10 аирподс
// 10 апплвоч
// 10 айфон
// 1 автомобиль

const filePath = './db/db_users.xlsx';

const COUNT_WINNERS = 61; // Общее кол-во победителей

let users;

const getInit = async () => {
	if (users) {
		return;
	}

	const workbook = xlsx.readFile(filePath);

	const sheetName = workbook.SheetNames[0];

	users = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

const getWinners = async () => {
	// Функция для получения уникальных пользователей по номеру телефона
	function getUniqueUsersByPhone(users) {
		const uniquePhones = new Set();
		return users.filter(user => {
			const isUnique = !uniquePhones.has(user.phone);
			uniquePhones.add(user.phone);
			return isUnique;
		});
	}

	// Функция для получения случайных победителей
	function getRandomWinners(users, count) {
		const winners = [];
		const usersCopy = [...users]; // Создаем копию массива, чтобы не изменять оригинальный

		while (winners.length < count && usersCopy.length > 0) {
			const randomIndex = Math.floor(Math.random() * usersCopy.length);
			winners.push(usersCopy[randomIndex]);
			usersCopy.splice(randomIndex, 1); // Удаляем выбранного пользователя, чтобы избежать повторений
		}
		return winners.map(w => w.phone);
	}

	const uniqueUsers = getUniqueUsersByPhone(users);
	const selectedWinners = getRandomWinners(uniqueUsers, COUNT_WINNERS);

	// Тут нужно указать кол-во победителей для конкретного приза, общая сумма победителей = COUNT_WINNERS
	const winners = {
		money_100: selectedWinners.slice(0, 10).map(winner => winner), // первые 10 победителей
		money_500: selectedWinners.slice(10, 20).map(winner => winner),
		samsung: selectedWinners.slice(20, 30).map(winner => winner),
		airpods: selectedWinners.slice(30, 40).map(winner => winner),
		watch: selectedWinners.slice(40, 50).map(winner => winner),
		iphone: selectedWinners.slice(50, 60).map(winner => winner),
		car: selectedWinners.slice(60, 61).map(winner => winner),
	};

	return winners;
}

app.get('/init', async (req, res) => {
	try {
		await getInit();
		res.json(JSON.stringify({ status: 1 }));
	} catch (error) {
		res.status(500).send('Ошибка при чтении файла XLSX');
	}
});

app.get('/get-winners', async (req, res) => {
	try {
		const winners = await getWinners();
		res.json(JSON.stringify(winners));
	} catch (error) {
		res.status(500).send('Ошибка при генерации списка победителей');
	}
});

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});